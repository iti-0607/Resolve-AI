import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../services/api";
import Header from "../components/Header";

function ChatPage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm ResolveAI. How may I help you today?",
    },
  ]);

  const handleSend = async (text) => {

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);
  
    setLoading(true);
  
    try {
  
      const data = await sendMessage(text);
  
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);
  
    } catch {
  
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong.",
        },
      ]);
  
    } finally {
  
      setLoading(false);
  
    }
  
  };


  return (
    <div className="flex h-screen bg-gray-100">
  
      <Sidebar />
  
      <div className="flex flex-col flex-1">
  
        <Header />
  
        <ChatBox
   messages={messages}
   loading={loading}
/>
  
        <ChatInput onSend={handleSend} />
  
      </div>
  
    </div>
  );
}

export default ChatPage;