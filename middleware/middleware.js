const router = require('express').Router()
const { userModel } = require('../Database/userSchema')
const jwt = require('jsonwebtoken')

// To set cookie --> in sign in/sign up form only
// router.post('/set', (req, res) => {
//     const { name } = req.body
//     const cookievalue = `$nett@${name}.harp${Math.round(Math.random() * 1000)}`
//     userModel.findOneAndUpdate({ name }, {
//         $set: {
//             cookie: cookievalue
//         }
//     }).exec((err, resp) => {
//         if (err || !resp) {
//             res.send("Cookie expired,please sign in again")
//         }
//         else {
//             res.cookie('harpnett', cookievalue, { expires: new Date(Date.now() + 3600000) })
//             res.send("User cookie updated")
//         }
//     })
// })

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