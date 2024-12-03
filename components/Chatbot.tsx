// /components/Chatbot.tsx
"use client";

import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    // Add user message to the chat
    setMessages((prev) => [...prev, { user: userInput, bot: "..." }]);
    setLoading(true);
    setUserInput(""); // Clear input field

    try {
      // Send message to the backend API to get the bot's response
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: userInput }),
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      const botMessage = data.message || "Sorry, I couldn’t understand that.";

      // Update the conversation with the bot's reply
      setMessages((prev) => [...prev, { user: userInput, bot: botMessage }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { user: userInput, bot: "Error fetching response. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>
              <p>
                <strong>You:</strong> {msg.user}
              </p>
              <p>
                <strong>Bot:</strong> {msg.bot}
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about law, legal or finance..."
            className="input"
            required
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Processing..." : "Send"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .chatbot-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }
        .chatbox {
          width: 100%;
          max-width: 600px;
          padding: 1rem;
          background-color: #f4f4f4;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .messages {
          margin-bottom: 1rem;
          max-height: 400px;
          overflow-y: scroll;
        }
        .input-form {
          display: flex;
        }
        .input {
          width: 80%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 0.5rem;
        }
        .submit-btn {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .submit-btn:hover {
          background-color: #0056b3;
        }
        .submit-btn:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
