import React, { useState, useEffect } from 'react';
import socket from '../../assets/js/Socket';
// Adjust the path based on your project structure

const ChatComponent = () => {
    const [messages, setMessages] = useState<string[]>([]);



  useEffect(() => {
    // Listen for 'chat message' events
    socket.on('chat message', (message: string) => {
      // Use the correct type for the state update
      setMessages((prevMessages: string[]) => [...prevMessages, message]);
    });
  
    // Clean up the event listener on component unmount
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    // Emit 'chat message' event
    socket.emit('chat message', messages);
    setMessages([]);
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={messages}
        onChange={(e) => setMessages([e.target.value])}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
