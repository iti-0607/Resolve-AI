import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../services/api";

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm ResolveAI. How may I help you today?",
    },
  ]);

  const handleSend = async (text) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    try {
      const data = await sendMessage(text);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);
    } catch (err) {
        console.log(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to server.",
        },
      ]);
    }
  };

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <ChatBox messages={messages} />

        <ChatInput onSend={handleSend} />

      </div>

    </div>
  );
}

export default ChatPage;