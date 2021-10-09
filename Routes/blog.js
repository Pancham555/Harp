const router = require('express').Router()

router.get('/', (req, res) => {
    res.json([
        {
            img: "../images/Antelope-Canyon-Wallpapers.jpg",
            heading: "Today's trending",
            text: `
        lorem ipsum dolor
            `,
            link: "news"

        },
        {
            img: "../images/hdr-landscape-1.jpg",
            heading: "About the company",
            text: `
            As all of a busy we work here as if it is out own company......
            `,
            link: "company"

        },
        {
            img: "../images/Doge1.jpg",
            heading: "Meme",
            text: `
           ................
            `,
            link: "meme"

        }
    ])
})

module.exports = router