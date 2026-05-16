const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chat.controller");
console.log("ROUTE LOADED");

router.post("/", (req, res, next) => {
    console.log("ROUTE HIT");
    next();
}, chatController);

module.exports = router;