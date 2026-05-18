import React, { useState } from "react";
import Chat from "../components/Chat";

function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;

    setError(null);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text }
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text })
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || data.content
        }
      ]);

    } catch (error) {
      console.error(error);

      setError("Server is not responding");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Server is not responding. Try again later."
        }
      ]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <Chat
      messages={messages}
      input={input}
      setInput={setInput}
      sendMessage={sendMessage}
      loading={loading}
      error={error}
    />
  );
}
export default ChatContainer;