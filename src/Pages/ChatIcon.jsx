import React, { useState } from "react";
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
      { sender: "ai", text: "Thinking... 💭", loading: true },
    ]);

    const healthGymPrompt = `You are a friendly and fun fitness assistant. 
    Your tone should be supportive, engaging, and encouraging, like a gym buddy.
    Keep responses positive, motivating, and casual. If the query is unrelated to fitness, say:
    "Hey! That’s not a fitness question, but let’s get back to working out! 💪".
    Here is the user's message: ${userMessage}`;

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
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop(); // Remove loading

        const aiResponse = data.candidates[0].content.parts[0].text;
        updatedMessages.push({ sender: "ai", text: `🔥 ${aiResponse}` });

        return updatedMessages;
      });
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop();
        updatedMessages.push({
          sender: "ai",
          text: "Oops! My muscles are a bit sore from thinking too much. Try again! 😅",
        });
        return updatedMessages;
      });
    }
  };

  return (
    <div className="chat-container">
      {/* Chat Icon */}
      <div className="chat-icon" onClick={toggleChat} title="Chat with your Gym Buddy!">
        🏋️‍♂️
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-icon">🏋️‍♂️</div>
            <div className="chat-header-title">
              <h3>Gym Buddy Chat</h3>
              <p>Need fitness tips? Let's chat! 💪</p>
            </div>
            <button className="chat-close" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chat-body">
            {messages.length === 0 ? (
              <p className="chat-placeholder">
                Hey champ! 🏆 Need a workout plan? Ask me anything!
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.sender === "user" ? "user" : "ai"}`}
                >
                  {msg.text}
                  {msg.loading && <div className="loading-indicator">🤔...</div>}
                </div>
              ))
            )}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask about workouts, diet, or motivation!"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button type="button" onClick={handleSendMessage}>
              Send 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
