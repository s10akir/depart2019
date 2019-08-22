const { Router } = require('express');

const router = Router();

/**
 * item.idをキーにストア情報を取得する
 */
router.get('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * itemを新規に作成する
 */
router.post('/create', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * item.idをキーにitemの情報を更新する
 */
router.put('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * item.idをキーにitemを削除する
 */
router.delete('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * itemを検索する
 */
router.post('/search', (req, res) => {
  res.json({
    status: 'err'
  });
});

module.exports = router;
