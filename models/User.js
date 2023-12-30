const mongoose = require('mongoose')
const { isEmail } = require('validator')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required !"],
        unique: true,
        validate: [isEmail, 'a valid email is required !']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'minimum password length is 6']
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User