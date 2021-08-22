const express = require('express');
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = express()

require('./db/connection')

app.use(express.json())

const port = process.env.PORT || 8000

app.use(require('./routes'))


app.use(express.static('mern-project/build'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
