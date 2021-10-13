const router = require('express').Router()
const { userModel } = require('../Database/userSchema')
const jwt = require('jsonwebtoken')

// To set cookie --> in sign up form only
router.post('/set', (req, res) => {
    const { username } = req.body
    // Setting cookie
    const cookievalue = jwt.sign({ username }, process.env.JWTSECRET, { expiresIn: Number(new Date(Date.now() + (60 * 60 * 1000))) })
    userModel.findOneAndUpdate(
        { username }, {
        $set: {
            cookie: cookievalue
        }
    }).exec((err, resp) => {
        if (!err && resp) {
            res.cookie('harpnett', cookievalue, { httpOnly: true, sameSite: false, path: '/', expires: new Date(Date.now() + (60 * 60 * 1000)) })
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
            res.send("Cookie verified")
        }
    }))
})


module.exports = router