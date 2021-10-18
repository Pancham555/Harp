const router = require('express').Router()
const { newsModel } = require('../../Database/newsSchema')
const { memeModel } = require('../../Database/memeSchema')
// Note: this will be maintained using mongodb and news will be updated every week

// Idea to get data,talk to public to give data,I will review it,in return they will get metioned

router.get('/news:newsid?', (req, res) => {
    res.send("News")
    /*
    // The below will be the trending news,there will be an algorithm which will
    //  redirect the page to the trending news when there isn't a newsid parameter

    res.json({
    heading:"",
    imagelink:"",
    news:"",
    credits:"",
    // The below news will come with query parameter
    othernews:[
        {
    imagelink:"",
    heading:"",
    redirect:""
    }
]
    })
    */
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
router.get('/meme:name?', (req, res) => {
    // const { name } = req.query
    // memeModel.find({ name }).exec((err, resp) => {
    //     if (err || !resp) {
    //         res.send("Sorry, cannot load memes,please try again later")
    //     } else {
    //         res.send(resp)
    //     }
    // })

    /*
    res.json({
        imagelink:"",
        credits:"",
        liked:true,
        // Simmilar to news is forms of othermemes
    othermemes:[
    
    ]
    })
    */
    res.send("meme")
})
router.put('/meme:like?', (req, res) => {
    const { like } = req.query
    // Will use jwt to find the meme
    // memeModel.findOneAndUpdate({})
})

module.exports = router

