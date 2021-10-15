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
    const cookie = req.headers.cookie.split('; ')
    const cookieObj = {}
    cookie.forEach(data => {
        const value = data.split("=")

        cookieObj[value[0]] = value[1]

        return cookieObj
    })

    jwt.verify(cookieObj.harpnett, process.env.JWTSECRET, ((err, resp) => {
        if (err || !resp) {
            res.send("Cookie expired")
        }
        else {
            const decode = jwt.decode(cookieObj.harpnett)
            const value = decode.emailOrUsername
            const getUserName = async () => {
                const useEmail = userModel.findOne({ email: value })
                const userUserName = userModel.findOne({ username: value })
                console.log(useEmail);
                if (useEmail) {
                    useEmail.exec((err, resp) => {
                        if (err || !resp) { res.send("Something went wrong,please sign in again") }
                        else {
                            res.json({ message: "Cookie verified", name: resp.username })
                        }
                    })
                }
                else if (userUserName) {
                    userUserName.exec((err, resp) => {
                        if (err || !resp) { res.send("Something went wrong,please sign in again") }
                        else {
                            res.json({ message: "Cookie verified", name: resp.username })
                        }
                    })
                }
                else {
                    res.json({ message: "You are not a verified user" })
                }

            }
            getUserName()
        }
    }))
})


module.exports = router