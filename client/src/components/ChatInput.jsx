import { useState } from "react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex gap-3 p-4 border-t bg-white">
      <input
        className="flex-1 border rounded-xl px-4 py-3 outline-none"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;