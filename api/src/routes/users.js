const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('users').end()
});

module.exports = router
