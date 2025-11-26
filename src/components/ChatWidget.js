import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Xin chào! Tôi có thể giúp gì cho bạn?', sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: 'Cảm ơn bạn đã liên hệ! Nhân viên sẽ phản hồi trong giây lát.',
          sender: 'bot'
        }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-avatar">🧸</span>
              <div>
                <h4>Hỗ trợ khách hàng</h4>
                <span className="status">● Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-close">
              <FaTimes />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
};

export default ChatWidget;
