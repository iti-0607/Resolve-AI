import AnalysisCard from "./AnalysisCard";

function Message({ sender, text, analysis }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6`}>

      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 flex-shrink-0">
          🤖
        </div>
      )}

      <div className="max-w-xl">

        <div
          className={`px-5 py-3 rounded-2xl border shadow-sm ${
            isUser
              ? "bg-blue-600 text-white rounded-br-sm"
              : "bg-white text-gray-800 rounded-bl-sm"
          }`}
        >
          {text}
        </div>

        {!isUser && analysis && (
          <AnalysisCard analysis={analysis} />
        )}

      </div>

    </div>
  );
}

export default Message;