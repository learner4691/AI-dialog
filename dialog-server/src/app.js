require("dotenv").config();

const express = require("express");
const cors = require("cors"); 
const chatRoute = require("./routes/chat.route");

const app = express();

//CORS middleware
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime(),
        env: process.env.NODE_ENV || "dev"
    });
});

app.use("/api/chat", chatRoute);

module.exports = app;
