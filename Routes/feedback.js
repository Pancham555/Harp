const router = require('express').Router()
const { userModel } = require("../Database/userSchema")
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    // The below part is for me only
    const { headauthor } = req.body
    const { remarks, username } = req.body
    if (headauthor == process.env.FEEDBACKAUTH) {
        userModel.findOneAndUpdate({ username }, {
            $push: {
                feedback: {
                    head: true,
                    remarks
                }
            }
        }).exec((err, resp) => {
            if (err || !resp) {
                res.send("Something went wrong")
            } else {
                res.send("Remarks sent successfully")
            }
        })
    }
    // The above part is for me only

    // The below part is for user
    else {
        const { harpnett } = req.cookies
        const { userfeedback } = req.body
        jwt.verify(harpnett, process.env.JWTSECRET, (err, resp) => {
            if (err || !resp) {
                res.send("Cookie expired")
            }
            else {
                const sendFeedback = async () => {
                    const value = await jwt.decode(harpnett).emailOrUsername
                    const useEmail = await userModel.findOne({ email: value })
                    const useUserName = await userModel.findOne({ username: value })
                    if (!useUserName && !useEmail) {
                        res.send("You are not a verified user")
                    }
                    else {
                        userModel.findOneAndUpdate(useUserName ? { username: value } : { email: value }, {
                            $push: {
                                feedback: {
                                    head: false,
                                    remarks: userfeedback
                                }
                            }
                        }, { new: true }).exec((error, response) => {
                            if (error || !response) {
                                res.send("Something went wrong,please try again later")
                            } else {
                                res.send("Your feedback is sent successfully")
                            }
                        })
                    }
                }
                sendFeedback()
            }
        })
    }
})


router.get('/', (req, res) => {
    const { harpnett } = req.cookies
    jwt.verify(harpnett, process.env.JWTSECRET, (err, resp) => {
        if (err || !resp) {
            res.send("Cookie expired")
        }
        else {
            const sendFeedback = async () => {
                const value = await jwt.decode(harpnett).emailOrUsername
                const useEmail = await userModel.findOne({ email: value })
                const useUserName = await userModel.findOne({ username: value })
                if (!useUserName && !useEmail) {
                    res.send("You are not a verified user")
                } else {
                    userModel.findOne(useUserName ? { username: value } : { email: value }).exec((error, response) => {
                        const limitedData = response.feedback
                        res.send(limitedData)
                    })

                }
            }
            sendFeedback()
        }

    })
})


module.exports = router