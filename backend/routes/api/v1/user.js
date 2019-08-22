const { Router } = require('express');

const router = Router();

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

module.exports = router;
