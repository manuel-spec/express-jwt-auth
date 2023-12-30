var express = require('express');
var router = express.Router();
const { body } = require('express-validator')
var auth = require('../controllers/authController')

/* GET users listing. */
router.get('/login', auth.login)
router.get('/signup', auth.signup)
router.post('/login', auth.loginPost)
router.post('/signup', body('email').isEmail().withMessage('valid email is required').escape(),
    body('password').notEmpty().withMessage('password is required !').escape(), auth.signupPost)

module.exports = router;
