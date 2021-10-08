const router = require('express').Router()

router.get('/news', (req, res) => {
    res.send("Hello world")
})

router.get('/company', (req, res) => {
    res.send("Hello world")
})

router.get('/meme', (req, res) => {
    res.send("Hello world")
})

module.exports = router

