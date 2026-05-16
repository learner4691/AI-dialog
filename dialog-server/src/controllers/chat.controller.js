const { generateAIResponse } = require("../services/ai.service");

const chatController = async (req, res) => {
  console.log("CONTROLLER HIT");
  console.log("BODY:", req.body);

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const response = await generateAIResponse(message);

  return res.json(response);
};

module.exports = chatController;