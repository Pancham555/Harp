var mongoose = require('mongoose');
const connect = require('./connection')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
    ,
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    cpassword: {
        type: String,
        minlength: 8,
        required: true
    },
    feedback: [String]
})

const userModel = mongoose.model('user', userSchema)

module.exports = { userModel }