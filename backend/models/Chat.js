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
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    chatName: {
        type: String,
        required: true,
        trim: true
    },
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"

    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model("Chat", ChatSchema)