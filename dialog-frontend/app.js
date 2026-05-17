const { useState } = React;

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;

    setMessages(prev => [
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

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.content }
      ]);

    } catch (e) {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Server error" }
      ]);
    }
  };

  return (
    <div className="container">
      <div className="chat">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>
            {m.content}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask whatever you want"
        />
        <button onClick={sendMessage} disabled={!input.trim()}>Send</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);