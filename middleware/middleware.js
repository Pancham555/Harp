const router = require('express').Router()
const { userModel } = require('../Database/userSchema')
const jwt = require('jsonwebtoken')

// To set cookie --> in sign up form only
router.post('/set', (req, res) => {
    const { username } = req.body
    // Setting cookie
    const cookievalue = jwt.sign({ username }, process.env.JWTSECRET, { expiresIn: Number(new Date(Date.now() + (60 * 60 * 1000 * 24))) })
    userModel.findOneAndUpdate(
        { username }, {
        $set: {
            cookie: cookievalue
        }
    }).exec((err, resp) => {
        if (!err && resp) {
            res.cookie('harpnett', cookievalue, { httpOnly: true, sameSite: false, path: '/', expires: new Date(Date.now() + (60 * 60 * 1000 * 24)) })
                .send("Sign up successfully & cookie added")
        } else {
            res.status(200).send("Something went wrong")
        }
    })
})

// To verify cookie --> in every page except registration forms
router.get('/', (req, res) => {
    const { harpnett } = req.cookies

    jwt.verify(harpnett, process.env.JWTSECRET, ((err, resp) => {
        if (err || !resp) {
            res.send("Cookie expired")
        }
        else {
            const getUserName = async () => {
                const decode = jwt.decode(harpnett)
                const value = await decode.emailOrUsername
                const useEmail = await userModel.findOne({ email: value })
                const useUserName = await userModel.findOne({ username: value })
                if (!useUserName && !useEmail) {
                    res.json({ message: "You are not a verified user" })
                }
                else {
                    userModel.findOne(useUserName ? { username: value }
                        : { email: value }).exec((error, response) => {
                            if (error || !response) {
                                res.send("Something went wrong,please sign in again")
                            }
                            else {
                                res.json({ message: "Cookie verified", name: response.username })
                            }
                        })
                }
            }
            getUserName()
        }
    }))
})


module.exports = router