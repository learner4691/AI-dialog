const { generateAIResponse } = require("../services/ai.service");

const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await generateAIResponse(message);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = chatController;