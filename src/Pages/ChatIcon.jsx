import React, { useState } from "react";
// Import CSS file
import "../Styles/ChatIcon.css";

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Append user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputMessage },
    ]);

    const userMessage = inputMessage;
    setInputMessage("");

    // Append loading indicator
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "ai", text: "Typing...", loading: true },
    ]);

    const healthGymPrompt = `You are a fitness and health assistant. You should only provide responses related to health, workouts, gym exercises, nutrition, diet, and fitness advice. If the query is not related to these topics, respond with "This query is not related to health and fitness. Please ask only health and fitness-related questions.". Here is the user query: ${userMessage}`;

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAB7wNdMtwKnIVG-e9TKXqfIAO4Wwc-dcA",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: healthGymPrompt }] }],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API error: ${response.status} - ${
            errorData.error?.message || "Unknown error"
          }`
        );
      }

      const data = await response.json();
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];

        // Remove the loading message
        updatedMessages.pop();

        // Add AI response
        const aiResponse = data.candidates[0].content.parts[0].text;
        updatedMessages.push({ sender: "ai", text: aiResponse });

        return updatedMessages;
      });
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop();
        updatedMessages.push({
          sender: "ai",
          text: "Sorry, something went wrong. Please try again.",
        });
        return updatedMessages;
      });
    }
  };

  return (
    <div className="chat-container">
      {/* Chat Icon */}
      <div className="chat-icon" onClick={toggleChat}>
        💬
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-icon">💬</div>
            <div className="chat-header-title">
              <h3>Fitness Chat</h3>
              <p>Ask about health & fitness!</p>
            </div>
            <button className="chat-close" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chat-body">
            {messages.length === 0 ? (
              <p className="chat-placeholder">Start a conversation!</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    msg.sender === "user" ? "user" : "ai"
                  }`}
                >
                  {msg.text}
                  {msg.loading && <div className="loading-indicator">...</div>}
                </div>
              ))
            )}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button type="button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
