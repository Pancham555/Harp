var mongoose = require('mongoose');
const connect = require('./connection')

const chatSchema = mongoose.Schema({
    anonymous: String
})

const chatModel = mongoose.model('dbs', chatSchema)

module.exports = chatModel