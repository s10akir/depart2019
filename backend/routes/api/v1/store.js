require('../../../models');

const { Router } = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = Router();

const Store = mongoose.model('Store');

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  Store.find({ username }, (err, doc) => {
    // TODO: need refactoring
    if (err !== null) {
      return done({ err: 'database error.' });
    }

    if (doc.length === 0) {
      return done({ err: 'user not found.' });
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

/**
 * ストアを新規に作成する
 */
router.post('/signup', (req, res) => {
  res.json({
    status: 'err'
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
router.post('/login', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * サービスからのログアウトを行う
 */
router.get('/logout', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * ストアの検索を行う
 */
router.post('/search', (req, res) => {
  res.json({
    status: 'err'
  });
});

module.exports = router;
