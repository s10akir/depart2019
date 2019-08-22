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

module.exports = router;
