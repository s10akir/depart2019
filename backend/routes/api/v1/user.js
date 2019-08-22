require('../../../models');

const { Router } = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = Router();
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  User.find({ id: username }, (err, doc) => {
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

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  User.find({ id }, (error, doc) => {
    if (error) {
      return done(error);
    }
    return done(null, doc[0]);
  });
});

/**
 * user.idをキーにユーザ情報を取得する
 */
router.get('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * userを新規に作成する
 */
router.post('/signup', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * user.idをキーにユーザを削除する
 */
router.delete('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * サービスへのログインを行う
 */
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({
    status: 'login success.'
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

module.exports = router;
