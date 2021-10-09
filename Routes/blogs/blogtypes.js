const router = require('express').Router()
const { newsModel } = require('../../Database/newsSchema')
// Note: this will be maintained using mongodb and news will be updated every week

// Idea to get data,talk to public to give data,I will review it,in return they will get metioned

router.get('/news', (req, res) => {
    // const getData = async () => {
    //     await newsModel.find().exec((err, resp) => {
    //         if (err || !resp) {
    //             res.send("Something went wrong")
    //         } else {
    //             res.send(resp)
    //         }
    //     })
    // }
    // getData()
    res.send("News")
})

router.post('/news', (req, res) => {
    const { heading, img, news } = req.body
    const sendData = async () => {
        await new newsModel({
            newsHeading: heading,
            image: img,
            newsTxt: news
        }).save((err, resp) => {
            if (err || !resp) {
                res.send("Something went wrong")
            }
            else {
                res.send("Your news is submitted successfully")
            }
        })
    }
    sendData()
})





// Not sure whether I will proceed to make it or not
router.get('/company', (req, res) => {
    res.send("company")
})

// This is something I will make it later
router.get('/meme', (req, res) => {
    res.send("meme")
})

module.exports = router

