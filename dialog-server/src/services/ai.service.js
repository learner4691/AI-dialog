const { generateMockResponse } = require("./mock.service");
const { generateOpenAIResponse } = require("./openai.service");

const useOpenAI = false;

// утилита задержки
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// retry-обёртка
const withRetry = async (fn, retries = 2) => {
  let lastError;

  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      // небольшая пауза перед повтором
      await sleep(300 * (i + 1));
    }
  }

  throw lastError;
};

const generateAIResponse = async (message) => {
  console.log("[AI] request:", message);
  console.log("AI service hit");

  const handler = useOpenAI
    ? () => generateOpenAIResponse(message)
    : () => generateMockResponse(message);

  try {
    const result = await withRetry(handler, 2);
    console.log("[AI] response:", result);

    return result;
  } catch (err) {
    console.error("[AI] error:", err);

    throw err;
  }
};

module.exports = {
  generateAIResponse,
};