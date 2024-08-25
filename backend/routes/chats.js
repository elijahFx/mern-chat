const express = require("express")
const router = express.Router()
const { getChats, getSingleChat } = require("../controllers/chatControllers")

router.get("/", getChats)

router.get("/:id", getSingleChat)

module.exports = router