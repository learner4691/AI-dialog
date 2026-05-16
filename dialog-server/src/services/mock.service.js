// const generateMockResponse = async (message) => {
//     return {
//       role: "assistant",
//       content: `Mock AI response: ${message}`,
//     };
// };
  
// module.exports = {
//     generateMockResponse,
// };

const generateMockResponse = async (message) => {
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