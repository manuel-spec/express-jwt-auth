var express = require('express');
var router = express.Router();
var auth = require('../controllers/authController')

/* GET users listing. */
router.get('/login', auth.login)
router.get('/signup', auth.signup)
router.post('/login', auth.loginPost)
router.post('/signup', auth.signupPost)

module.exports = router;
