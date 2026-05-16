const express = require("express");
const chatRoute = require("./routes/chat.route");

const app = express();

app.use(express.json());

app.use("/api/chat", chatRoute);

module.exports = app;