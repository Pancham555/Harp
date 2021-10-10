const router = require('express').Router()

router.get('/', (req, res) => {
    res.json([
        {
            img: "../images/Antelope-Canyon-Wallpapers.jpg",
            heading: "Today's trending",
            text: 'lorem ipdum dolor..................................................................',
            link: "news"

        },
        {
            img: "../images/hdr-landscape-1.jpg",
            heading: "About the company",
            text: "After a tiring day.........................................................................",
            link: "company"

        },
        {
            img: "../images/Doge1.jpg",
            heading: "Meme",
            text: "...........................................................................................",
            link: "meme"

        }
    ])
})

module.exports = router