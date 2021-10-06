var mongoose = require('mongoose');
const connect = require('./connection')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    }
    ,
    password: {
        type: String,
        minlength: 8
    },
    cpassword: {
        type: String,
        minlength: 8
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = { userModel }