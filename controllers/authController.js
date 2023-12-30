const User = require('../models/User')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')

const expiresAt = 3 * 60 * 60 * 24
const createToken = (id) => {
    return jwt.sign(id, "secret", { expiresIn: expiresAt })
}

const login = (request, response) => {
    return response.render('auth/login')
}

const loginPost = (request, response) => {
    return response.send('login post')
}

const signupPost = (request, response) => {
    const { email, password } = request.body
    const result = validationResult(request)
    const isEmailUnique = User.findOne({ email: email }).then((result) => console.log(result))
    if (result.isEmpty() && isEmailUnique == null) {
        try {
            bcrypt.hash(password, 10).then((hash) => {
                const user = new User({
                    email: email,
                    password: hash
                })
                const savedUser = user.save()
                console.log(savedUser)

                const Newuser = User.findOne({ email })


                const token = jwt.sign({ userId: Newuser._id }, 'your-secret-key', {
                    expiresIn: '1h',
                });

                response.cookie('jwt', token, { maxAge: expiresAt * 1000, httpOnly: true })
                response.status(201).send(token)
            })
            // return response.redirect('/')
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