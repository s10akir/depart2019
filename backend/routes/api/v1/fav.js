const { Router } = require('express');

const router = Router();

/**
 * お気に入りに登録されているアイテムを全て取得する
 */
router.get('all', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * itemをお気に入りに登録する
 */
router.post('add', (req, res) => {
  res.json({
    status: 'err'
  });
});

/**
 * fav.idをキーにお気に入りを解除する
 */
router.delete('/:id', (req, res) => {
  res.json({
    status: 'err'
  });
});

module.exports = router;
