function TypingIndicator() {
    return (
      <div className="flex justify-start mb-5">
  
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
          AI
        </div>
  
        <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-5 py-4 shadow-md">
  
          <div className="flex gap-2">
  
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
  
            <span
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.15s" }}
            ></span>
  
            <span
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></span>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default TypingIndicator;