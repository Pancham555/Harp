const router = require('express').Router()

router.get('/', (req, res) => {
    res.json([
        {
            img: "../images/Antelope-Canyon-Wallpapers.jpg",
            heading: "Today's trending",
            text: false,
            link: "news"

        },
        {
            img: "../images/hdr-landscape-1.jpg",
            heading: "About the company",
            text: false,
            link: "company"

        },
        {
            img: "../images/Doge1.jpg",
            heading: "Meme",
            text: false,
            link: "meme"

        }
    ])
})

module.exports = router