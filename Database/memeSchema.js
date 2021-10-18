const mongoose = require('mongoose')

const memeSchema = new mongoose.Schema({
    name: String,
    mememaker: String,
    meme: Buffer,
    likes: Number
})

const memeModel = mongoose.model('meme', memeSchema)

module.exports = { memeModel }