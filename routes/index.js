var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/smoothies', function (req, res) {
  return res.render('smoothies')
})

module.exports = router;
