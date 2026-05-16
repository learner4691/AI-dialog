const generateMockResponse = async (message) => {
  console.log("service hit");
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    role: "assistant",
    content: `🤖 Mock AI: ${message}`,
    timestamp: new Date().toISOString(),
  };
};

module.exports = {
  generateMockResponse,
};