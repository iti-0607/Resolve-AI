import Message from "./Message";
import {
  useEffect,
  useRef,
} from "react";

function ChatBox({
  messages,
  loading,
}){
  const bottomRef = useRef(null);
  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  
  }, [messages, loading]);
  return (
    <div className="flex-1 overflow-y-auto px-8 py-8 bg-gradient-to-b from-slate-100 to-white">
      {messages.map((msg, index) => (
        <Message
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}
      {
  loading && (
    <Message
      sender="bot"
      text="Typing..."
    />
  )
}
<div ref={bottomRef}></div>

    </div>
  );
}

export default ChatBox;