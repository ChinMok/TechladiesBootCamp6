const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ message: 'Welcome to TechLadies Bootcamp 6' })
})

module.exports = router