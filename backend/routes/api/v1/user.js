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
  User.find({ username }, (err, doc) => {
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
  User.find({ username }, (error, doc) => {
    if (error) {
      return done(error);
    }
    return done(null, doc[0]);
  });
});

/**
 * userを新規に作成する
 */
router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.json({ err: 'params not enough.' });
  } else {
    User.find({ username }, (err, doc) => {
      if (doc.length !== 0) {
        res.json({ err: 'user exist.' });
      } else {
        new User({
          username,
          password,
          created_at: new Date(),
          updated_at: new Date()
        }).save();

        res.json({ status: 'success' });
      }
    });
  }
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
