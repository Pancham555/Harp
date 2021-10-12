var mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const connection = require('./connection')
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
    feedback: [String],
    cookie: String
})

userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {

        this.password = await bcryptjs.hash(this.password, 12)

        this.cpassword = await bcryptjs.hash(this.cpassword, 12)

    }

    next()

})

const userModel = mongoose.model('user', userSchema)

module.exports = { userModel }