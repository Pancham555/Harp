const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

require('./db/connection')

const User = require('./db/schema')

//Sign Up

router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill all the fields" })
    }
    else {
        try {
            const userExits = await User.findOne({ email })
            if (userExits) {
                return res.status(422).json({ error: "User with this email already exists" })
            }
            else if (password !== cpassword) {
                return res.status(422).json({ error: "Both password and confirm password are not same" })
            }
            else {
                const user = new User({ name, email, phone, password, cpassword })
                await user.save()
                return res.status(201).json({ message: "Your registration is done successfully" })
            }
        } catch (error) {
            console.log(error)
        }
    }
})

//Login

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Plz fill all the fields" })
        }
        else {
            const userLogin = await User.findOne({ email })
            if (userLogin) {
                const isMatch = await bcryptjs.compare(password, userLogin.password)
                if (!isMatch) {
                    res.status(400).json({ error: "Invalid credentials" })
                } else {
                    res.json({ message: "User logged successfully" })
                }
            }
            else {
                res.status(400).json({ error: "Invalid credentials" })
            }
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
