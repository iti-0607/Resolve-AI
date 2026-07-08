import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../services/api";
import Header from "../components/Header";
import WelcomeScreen from "../components/WelcomeScreen";
import { createTicket } from "../services/api";
import TicketCard from "../components/TicketCard";

function ChatPage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm ResolveAI. How may I help you today?",
    },
  ]);
  const [ticket, setTicket] = useState(null);

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
          analysis: data.analysis, // ✅ Store analysis with the bot message
        },
      ]);
    } catch (error) {
      console.error(error);
  
      setMessages([
        ...updatedMessages,
        {
          sender: "bot",
          text: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
   
  const handleQuickAction = (prompt) => {
    handleSend(prompt);
  };


  const handleCreateTicket = async (analysis) => {
    try {
      const data = await createTicket(analysis);
  
      setTicket(data.ticket);
  
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
  
      <Sidebar />
  
      <div className="flex flex-col flex-1">
  
        <Header />
  
  
{
  chatStarted ? (
<>
    
    
    <ChatBox
        messages={messages}
        loading={loading}
        onCreateTicket={handleCreateTicket}
    />

    {ticket && (
        <div className="px-8 pb-6">
            <TicketCard ticket={ticket} />
        </div>
    )}
</>
   
    
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