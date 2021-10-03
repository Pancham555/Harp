const express = require('express')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT || 5000
const connect = require('./Database/connection')
const Model = require('./Database/chatSchema')

app.use(express.static('./client/harp/out/'))
app.use(express.json())

app.post('/chatserver', (req, res) => {
    const { chat } = req.body
    try {
        const pushData = async () => {
            await Model({ anonymous: chat }).save((err, resp) => {
                if (err || !resp) {
                    res.send("Data insertion failed")
                } else {
                    res.send("Data inserted")
                }
            })

        }
        pushData()
    } catch (error) {
        console.log(error);
    }

})


app.get('/chatserver:limit?', (req, res) => {
    try {
        const showData = async () => {
            await Model.find().limit(req.query.limit ? req.query.limit : null)
                .exec((err, resp) => {
                    if (err || !resp) {
                        res.send("Unable to find any data")
                    } else {
                        res.json(resp)
                    }
                })
        }
        showData()
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))