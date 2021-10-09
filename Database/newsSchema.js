var mongoose = require('mongoose');
const connect = require('./connection')

const NewsSchema = new mongoose.Schema({
    newsHeading: String,
    image: String,
    newsTxt: String
})

const newsModel = mongoose.model('news', NewsSchema)

module.exports = { newsModel }