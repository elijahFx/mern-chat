require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

const corsOptions = {
    origin: ["https://premcalc.netlify.app", "http://127.0.0.1:5173", "http://127.0.0.1:5173/", "http://localhost:5173", "http://localhost:5173/forgot-password", "http://localhost:5173/sessions", "https://premcalc.netlify.app/sessions", "https://premcalc.netlify.app/forgot-password"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}

app.use(cors(corsOptions))

app.use(express.json())

const chatRoutes = require("./routes/chats")

app.use("/chats", chatRoutes)

app.use(function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(`Received request: ${req.method} ${req.originalUrl}`);
    next();
});



mongoose.connect(process.env.URI)
.then(() => {

    app.listen(process.env.PORT, () => {
        console.log(`Сервер включился и работает на порте ${process.env.PORT}`);
    })


})
.catch((error) => {
    console.log(error);
})