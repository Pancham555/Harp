const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const env = require('dotenv').config()
const port = process.env.PORT || 5000
const connect = require('./Database/connection')

app.use(express.json())

app.use(cookieParser())

app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}))

app.use(express.static('./client/harp/out/'))

app.use('/middleware', require('./middleware/middleware'))

app.use('/register', require('./Routes/registration'))

app.use('/images', express.static('./images'))

app.use('/blogs', require('./Routes/blog'))

app.use('/blog', require('./Routes/blogs/blogtypes'))

app.use('/feedbackserver', require('./Routes/feedback'))

app.use('/chatroutes', require('./Routes/routes'))

app.listen(port, () => console.log(`App listening on port ${port == 5000 ? `http://localhost:${port}` : 'https://harpnett.herokuapp.com/'}`))