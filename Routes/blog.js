const router = require('express').Router()

router.get('/', (req, res) => {
    res.json([
        {
            img: "../images/Antelope-Canyon-Wallpapers.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "../images/hdr-landscape-1.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "../images/image1.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        }
    ])
})

module.exports = router