const express = require('express')
const router = express.Router()
const { chatModel } = require('../Database/chatSchema')

router.post('/', (req, res) => {
    const { rname, rowner, rdesc, rimg, names } = req.body
    const createData = async () => {
        try {
            const response = new chatModel({
                roomName: rname,
                roomOwner: rowner,
                roomDescription: rdesc,
                imageLink: rimg,
                participants: [rowner, ...names]
            })
            const save = response.save()
            if (!save) {
                res.send("Something went wrong")
            }
            else {
                res.send("Room made successfully")
            }
        } catch (error) {
            console.log(error);
        }

    }
    createData()
})

router.put('/', (req, res) => {
    const { rname, rchatter, rtxt } = req.body
    const pushData = async () => {
        try {
            await chatModel.findOneAndUpdate({ roomName: rname },
                {
                    $push: {
                        chats: {
                            username: rchatter,
                            chatData: rtxt
                        }
                    }
                }
            ).exec((err, resp) => {
                if (err || !resp) {
                    res.send("Something went wrong")
                }
                else {
                    res.send("Chats added")
                }
            })
        } catch (error) {
            console.log(error);
        }

    }
    pushData()
})


router.get('/:rname?', (req, res) => {

    const showData = async () => {
        try {
            await chatModel.findOne({ roomName: req.query.rname }).exec((err, resp) => {
                if (err || !resp) {
                    res.send("Something went wrong")
                }
                else {
                    res.send(resp.chats)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    showData()
})

module.exports = router