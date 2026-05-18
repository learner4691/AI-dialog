import React, { useState } from "react";
import Chat from "../components/Chat";

function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text }
    ]);

    setInput("");

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content }
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Chat
      messages={messages}
      input={input}
      setInput={setInput}
      sendMessage={sendMessage}
    />
  );
}

export default ChatContainer;