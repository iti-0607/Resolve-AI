function Message({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-5`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
          🤖
        </div>
      )}

      <div
        className={`max-w-xl px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-lg-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-white text-gray-800 rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;