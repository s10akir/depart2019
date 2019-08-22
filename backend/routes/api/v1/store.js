require('../../../models');

const { Router } = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = Router();

const Store = mongoose.model('Store');

router.use(passport.initialize());
router.use(passport.session());

passport.use('store-login', new LocalStrategy((username, password, done) => {
  Store.find({ username }, (err, doc) => {
    // TODO: need refactoring
    if (err !== null) {
      return done({ err: 'database error.' });
    }

    if (doc.length === 0) {
      console.log(username);
      return done({ err: 'store not found.' });
    }

    if (doc[0].password !== password) {
      return done({ err: 'login failed.' });
    }

    return done(null, username);
  });
}));

passport.serializeUser((username, done) => {
  done(null, username);
});

passport.deserializeUser((username, done) => {
  Store.find({ username }, (error, doc) => {
    if (error) {
      return done(error);
    }
    return done(null, doc[0]);
  });
});

/**
 * ストアを新規に作成する
 */
router.post('/signup', (req, res) => {
  Store.find({ username: req.body.username }, (err, doc) => {
    if (doc.length !== 0) {
      res.json({
        err: 'store exist'
      });
    } else {
      const {
        username, password, email, tel, name, station, prefecture, city, block_number, opening_hours
      } = req.body;

      if (username, password, email, tel, name, station, prefecture, city, block_number, opening_hours) {

        new Store({
          username,
          password,
          email,
          tel,
          name,
          station,
          prefecture,
          city,
          block_number,
          opening_hours,
          created_at: new Date(),
          updated_at: new Date(),
        }).save();

        res.json({
          status: 'status'
        });
      } else {
        res.json({
          err: 'param not enought.'
        });
      }
    }
  });
});

/**
 * store.idをキーにストアを削除する
 */
router.delete('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * サービスへのログインを行う
 */
router.post('/login', passport.authenticate('store-login'), (req, res) => {
  res.json({
    status: 'success'
  });
});

/**
 * サービスからのログアウトを行う
 */
router.get('/logout', (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.json({
      status: 'success'
    });
  } else {
    res.json({
      err: 'not logined'
    });
  }
});

/**
 * ストアの検索を行う
 */
router.post('/search', (req, res) => {
  Store.find({ name: req.body.name }, (err, doc) => {
    if (err) {
      res.json({ err });
    } else {
      res.json(doc);
    }
  });
});

/**
 * store.idをキーにストア情報を取得する
 */
router.get('/:id', (req, res) => {
  Store.find({ username: req.params.id }, (err, doc) => {
    if (err) {
      res.json({
        err: 'database error.'
      });
    } else if (doc.length === 0) {
      res.json({
        err: 'store not found.'
      });
    } else {
      const store = delete doc[0].password;
      res.json(
        store
      );
    }
  });
});

module.exports = router;
