const express = require('express');
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = express()

require('./db/connection')

app.use(express.json())

const port = process.env.PORT || 8000

app.use(require('./routes'))

if (process.env.NODE_ENV == "production") {
    app.use(express.static('mern-project/build'))
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
