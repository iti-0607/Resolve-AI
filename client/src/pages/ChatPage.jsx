import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../services/api";
import Header from "../components/Header";
import WelcomeScreen from "../components/WelcomeScreen";

function ChatPage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm ResolveAI. How may I help you today?",
    },
  ]);
  const [chatStarted, setChatStarted] = useState(false);

  const handleSend = async (text) => {
    setChatStarted(true);
  
    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        text,
      },
    ];
  
    setMessages(updatedMessages);
  
    setLoading(true);
  
    try {
      const data = await sendMessage(updatedMessages);
  
      setMessages([
        ...updatedMessages,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          sender: "bot",
          text: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  const handleQuickAction = (prompt) => {
    handleSend(prompt);
  };


  return (
    <div className="flex h-screen bg-gray-100">
  
      <Sidebar />
  
      <div className="flex flex-col flex-1">
  
        <Header />
  
  
{
  chatStarted ? (
    <ChatBox
      messages={messages}
      loading={loading}
    />
  ) : (
    <WelcomeScreen
      onQuickAction={handleQuickAction}
    />
  )
}
  
        <ChatInput onSend={handleSend} />
  
      </div>
  
    </div>
  );
}

export default ChatPage;