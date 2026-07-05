import Message from "./Message";

function ChatBox({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
      {messages.map((msg, index) => (
        <Message
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}
    </div>
  );
}

export default ChatBox;