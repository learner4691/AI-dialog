const generateMockResponse = async (message) => {
    return {
      role: "assistant",
      content: `Mock AI response: ${message}`,
    };
};
  
module.exports = {
    generateMockResponse,
};