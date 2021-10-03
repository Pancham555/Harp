const express = require('express')
const app = express()
const port = 5000

app.use(express.static('./client/harp/out/'))

app.get('/blogserver', (req, res) => {

    res.send('hello from simple server :)')

})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))