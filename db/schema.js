const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: [true, "Email id already exists"],
        // validate(val) {
        //     if (!validator.isEmail(val)) {
        //         throw new Error("Invalid email")
        //     }
        // }
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    }
    ,
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})

userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {

        this.password = await bcryptjs.hash(this.password, 12)

        this.cpassword = await bcryptjs.hash(this.cpassword, 12)

    }

    next()

})

// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
//         this.tokens = this.tokens.concat({ token: token })
//         await this.save()
//         return token
//     } catch (error) {
//         console.log(error)
//     }
// }

const User = mongoose.model("User", userSchema)

module.exports = User
