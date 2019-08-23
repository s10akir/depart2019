require('../../../models');

const { Router } = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const multer = require('multer');

const Item = mongoose.model('Item');
const Store = mongoose.model('Store');

const storage = multer.diskStorage({
  destination: './public/images',
//  filename: (req, file, cb) => {
//    cb(null, file.originalname);
//  }
});
const uploader = multer({ storage });

const router = Router();
router.use(passport.initialize());
router.use(passport.session());

passport.use('store-login', new LocalStrategy((username, password, done) => {
  Store.find({ username }, (err, doc) => {
    // TODO: need refactoring
    if (err !== null) {
      return done({ err: 'database error.' });
    }

    if (doc.length === 0) {
      return done({ err: 'store not found.' });
    }

    if (doc[0].password !== password) {
      return done({ err: 'login failed.' });
    }

    return done(null, username);
  });
}));

/**
 * item._idをキーにItem情報を取得する
 */
router.get('/:id', (req, res) => {
  Item.find({ _id: req.params.id }, (err, doc) => {
    if (err) {
      res.json({ err });
    } else {
      res.json(doc);
    }
  });
});

/**
 * itemを新規に作成する
 */
router.post('/create', (req, res) => {
  if (req.isAuthenticated()) {
    const { name, count, price, original_price, best_by, use_by, published_until, image } = req.body;

    if (name && count && price && original_price && published_until) {
      new Item({
        store_id: req.user._id,
        name,
        count,
        price,
        original_price,
        best_by,
        use_by,
        published_until,
        image,
        created_at: new Date(),
        updated_at: new Date(),
      }).save();
      res.json({
        status: 'success'
      });
    } else {
      res.json({
        err: 'params not enough.'
      });
    }
  } else {
    res.json({
      err: 'login required.'
    });
  }
});

/**
 * item.idをキーにitemの情報を更新する
 */
router.put('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      status: 'err'
    });
  } else {
    res.json({
      err: 'login required.'
    });
  }
});

/**
 * item.idをキーにitemを削除する
 */
router.delete('/:id', (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.json({
      status: 'err'
    });
  } else {
    res.json({
      err: 'login required.'
    });
  }
});

/**
 * itemを検索する
 */
router.post('/search', (req, res) => {
  Item.find({ name: req.body.name }, (err, doc) => {
    if (err) {
      res.json({ err });
    } else {
      res.json(
        doc
      );
    }
  });
});

router.post('/image/:id', uploader.single('image'), (req, res) => {
  Item.update({ _id: req.params.id },
    {
      $set: { image: req.file.path }
    }, (err) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: 'success', path: req.file.path });
      }
    });
});

module.exports = router;
