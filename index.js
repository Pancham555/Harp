const express = require('express')
const app = express()
const cors = require('cors')
const env = require('dotenv').config()
const port = process.env.PORT || 5000
const connect = require('./Database/connection')

app.use(express.json())

// app.use(cors({
//     origin: "*"
// }))

app.use(express.static('./client/harp/out/'))

app.use('/images', express.static('./images'))

app.use('/blogs', require('./Routes/blog'))

app.use('/blog', require('./Routes/blogs/blogtypes'))

app.use('/feedbackserver', require('./Routes/feedback'))

app.use('/chatroutes', require('./Routes/routes'))

app.listen(port, () => console.log(`App listening on port ${port == 5000 ? `http://localhost:${port}` : 'https://harpnett.herokuapp.com/'}`))