const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const ChatSchema = new Schema({
    isGroupChat: {
        required: true,
        default: false,
        type: Boolean
    },
    users: {
        type: [UserSchema]
    },
    chatName: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Chat", ChatSchema)