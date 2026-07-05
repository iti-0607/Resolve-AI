import { useState } from "react";
import { SendHorizontal } from "lucide-react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="bg-white border-t p-5 flex gap-4">

      <input
        className="flex-1 rounded-full border px-6 py-4 outline-none"
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 text-white rounded-full px-8 hover:bg-blue-700 transition"
      >
        <SendHorizontal size={20} />
      </button>

    </div>
  );
}

export default ChatInput;