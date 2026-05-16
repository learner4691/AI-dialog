const fetch = require("node-fetch");

const generateOpenAIResponse = async (message) => {
  try {
    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: message
      })
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`OpenAI API error: ${res.status} ${errorText}`);
    }

    const data = await res.json();

    const content =
      data &&
      data.output &&
      data.output[0] &&
      data.output[0].content &&
      data.output[0].content[0] &&
      data.output[0].content[0].text
        ? data.output[0].content[0].text
        : "No response";

    return {
      role: "assistant",
      content,
      timestamp: new Date().toISOString()
    };

  } catch (err) {
    console.error("[OpenAI ERROR]", err);
    throw err;
  }
};

module.exports = { generateOpenAIResponse };
