var mongoose = require('mongoose');
const connect = require('./connection')

const chatSchema = mongoose.Schema({
    username: String,
    chatData: String
})

const chatRoomSchema = mongoose.Schema({
    roomName: String,
    roomOwner: String,
    roomDescription: String,
    imageLink: String,
    participants: [String],
    chats: [chatSchema]
})

const chatModel = mongoose.model('dbs', chatRoomSchema)

module.exports = { chatModel }