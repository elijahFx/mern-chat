const Chat = require("../models/Chat")
const mongoose = require("mongoose")



const addSession = async (req, res) => {
  try {
    const newSessions = req.body;
    const addedSessions = [];

    for (const newSession of newSessions) {
      const exists = await Session.findOne({
        name: newSession.name,
        date: newSession.date,
        time: newSession.time,
      });

      if (!exists) {
        const sessionToAdd = new Session(newSession);
        await sessionToAdd.save();
        console.log("МЫ ТУТУ");
        addedSessions.push(sessionToAdd);  // Push the saved session
      }
    }

    res.status(200).json({ added: addedSessions });
  } catch (error) {
    console.error('Error adding sessions:', error);
    res.status(500).json({ error: `ЧТО БЛЯТЬ?` });
  }
}






const getChats = async (req, res) => {

    const chats = await Chat.find({}).sort({createdAt: 1})
    res.status(200).json(chats)
}

const getSingleChat = async (req, res) => {
    const { id } = req.params
    
    if(!id) {
      res.status(400).json({err: "Нет такого чата"})
    }

    const chat = await Chat.find({ _id: id }).sort({createdAt: 1})
    res.status(200).json(chat)
}







const deleteSession = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({err: "Нет такого дела"})
  }

  const session = await Session.findOneAndDelete({ _id: id})

  if(!session ) {
      return res.status(404).json({err: "Нет такого дела"})
  }

  res.status(200).json(session)
}


module.exports = {
    getChats,
    getSingleChat
}