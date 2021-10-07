const router = require('express').Router()
const { userModel } = require("../Database/userSchema")
router.post('/', (req, res) => {
    const { name, feedback } = req.body
    try {
        const giveFeedback = async () => {
            await userModel.findOneAndUpdate({ username: name }, {
                $push: {
                    feedback
                }
            }).exec((err, resp) => {
                if (err || !resp) {
                    res.send("Something went wrong")
                }
                else {
                    res.send("Feedback given successfully")
                }
            })
        }

        giveFeedback()

    } catch (e) {
        console.log(e);
    }
})

router.get('/:name?', (req, res) => {
    try {
        const showFeedback = async () => {
            await userModel.findOne({ username: req.query.name }).exec((err, resp) => {
                if (err || !resp) {
                    res.send("Something went wrong")
                }
                else {
                    res.send(resp.feedback)
                }
            })

        }

        showFeedback()
    } catch (e) {
        console.log(e);
    }
})

module.exports = router