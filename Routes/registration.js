const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { userModel } = require('../Database/userSchema')

router.post('/signup', (req, res) => {
    const { username, email, password, cpassword, phone } = req.body
    const saveData = async () => {
        await new userModel({ username, email, phone, password, cpassword })
            .save((err, resp) => {
                if (err || !resp) {
                    res.send(`Failed to sign up.Plz try again later => ${err.code}`)
                }
                else {
                    // Setting cookie
                    const cookievalue = jwt.sign({ username }, process.env.JWTSECRET, { expiresIn: Date.now() + (60 * 60 * 1000) })
                    userModel.findOneAndUpdate(
                        { username }, {
                        $set: {
                            cookie: cookievalue
                        }
                    }).exec((err, resp) => {
                        if (!err && resp) {
                            res.cookie('harpnett', cookievalue, { httpOnly: false, sameSite: false, path: '/' })
                                .send("Sign up successfully & cookie added")
                        } else {
                            res.status(200).send("Something went wrong")
                        }
                    })
                }
            })
    }
    saveData()
})

router.post('/signin', (req, res) => {
    const { emailOrUsername, password } = req.body
    const verfiyUser = async () => {
        try {
            const usernameExist = await userModel.findOne({ username: emailOrUsername })
            const emailExist = await userModel.findOne({ email: emailOrUsername })
            if (!usernameExist && !emailExist) {
                res.status(200).send("No such email or username exists")
            }
            else {
                const verify = bcryptjs.compareSync(password, usernameExist ? usernameExist.password : emailExist.password)
                if (!verify) {
                    res.status(200).send("User verification failed")
                }
                else {
                    // Setting cookie
                    const cookievalue = jwt.sign({ emailOrUsername }, process.env.JWTSECRET, { expiresIn: Date.now() + (60 * 60 * 1000) })
                    userModel.findOneAndUpdate(
                        usernameExist ? { username: emailOrUsername } : { email: emailOrUsername }, {
                        $set: {
                            cookie: cookievalue
                        }
                    }).exec((err, resp) => {
                        if (!err && resp) {
                            res.cookie('harpnett', cookievalue, { httpOnly: false, sameSite: false, path: '/' })
                                .send("User verified successfully & cookie updated")
                        } else {
                            res.status(200).send("Something went wrong")
                        }
                    })
                }
            }

        } catch (error) {
            console.log(error);
        }

    }
    verfiyUser()
})

module.exports = router