const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('bookmarks').end()
});

module.exports = router
