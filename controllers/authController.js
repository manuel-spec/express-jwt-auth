const User = require('../models/User')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const login = (request, response) => {
    return response.render('auth/login')
}

const loginPost = (request, response) => {
    return response.send('login post')
}
const signupPost = (request, response) => {
    const { email, password } = request.body
    const result = validationResult(request)

    if (result.isEmpty()) {
        try {
            bcrypt.hash(password, 10).then((hash) => {
                const user = new User({
                    email: email,
                    password: hash
                })
                user.save()
            })
            return response.redirect('/')
        } catch (error) {
            console.log(error.message)
        }
    } else {
        return response.render('auth/signup', { errors: result })
    }

}

const signup = (request, response) => {
    return response.render('auth/signup', { errors: [] })
}

module.exports = {
    login,
    loginPost,
    signup,
    signupPost
}