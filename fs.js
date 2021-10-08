const fs = require('fs')

const data = fs.readFileSync(__dirname + "/images/Antelope-Canyon-Wallpapers.jpg").toString('base64')
const read = fs.writeFileSync(__dirname + "/images/newsimg.jpg", data)