const generateOpenAIResponse = async (message) => {
    // пока fallback, позже подключим API
    return {
      role: "assistant",
      content: `OpenAI not configured yet. You said: ${message}`,
      timestamp: new Date().toISOString(),
    };
};
  
module.exports = {
    generateOpenAIResponse,
};