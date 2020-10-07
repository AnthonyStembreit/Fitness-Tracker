const path = require('path')
const router = require('express').Router()

router.route('/').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.route('/exercise').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
})
router.route('/stats').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router