const { Router } = require('express');

const router = Router();

/**
 * store.idをキーにストア情報を取得する
 */
router.get('/:id', (req, res) => {
  res.json({
    status: 'err'
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

module.exports = router;
