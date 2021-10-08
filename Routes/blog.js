const router = require('express').Router()

router.get('/', (req, res) => {
    res.json([
        {
            img: "../images/Antelope-Canyon-Wallpapers.jpg",
            heading: "Today's trending",
            text: `
           A street vendor was shot dead by terrorists
            `

        },
        {
            img: "../images/hdr-landscape-1.jpg",
            heading: "About the company",
            text: `
            As all of a busy we work here as if it is out own company
            `

        },
        {
            img: "../images/Doge1.jpg",
            heading: "Meme",
            text: `
           .
            `

        }
    ])
})

module.exports = router