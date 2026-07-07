import {
    AlertTriangle,
    Building2,
    Brain,
    CircleAlert,
    BadgeCheck,
  } from "lucide-react";
  
  function AnalysisCard({ analysis }) {
    if (!analysis) return null;
  
    const priorityStyle = {
      High: "bg-red-100 text-red-700 border-red-300",
      Medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
      Low: "bg-green-100 text-green-700 border-green-300",
    };
  
    const emotionEmoji = {
      Happy: "😊",
      Neutral: "😐",
      Frustrated: "😟",
      Angry: "😠",
    };
  
    const recommendation = analysis.needsTicket
      ? `Escalate to ${analysis.department} Department`
      : "No ticket required. AI can continue assisting.";
  
    return (
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
  
        {/* Header */}
  
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-4 flex items-center gap-3">
  
          <Brain size={24} />
  
          <div>
  
            <h2 className="font-bold text-lg">
              AI Case Analysis
            </h2>
  
            <p className="text-sm text-blue-100">
              Generated automatically by ResolveAI
            </p>
  
          </div>
  
        </div>
  
        <div className="p-5">
  
          {/* Priority Badge */}
  
          <span
            className={`inline-block px-4 py-1 rounded-full border font-semibold text-sm ${priorityStyle[analysis.priority]}`}
          >
            {analysis.priority.toUpperCase()} PRIORITY
          </span>
  
          {/* Grid */}
  
          <div className="grid grid-cols-2 gap-4 mt-6">
  
            <div className="bg-slate-50 rounded-xl p-4">
  
              <CircleAlert className="text-blue-600 mb-2" />
  
              <p className="text-sm text-gray-500">
                Issue Type
              </p>
  
              <h3 className="font-semibold">
                {analysis.issueType}
              </h3>
  
            </div>
  
            <div className="bg-slate-50 rounded-xl p-4">
  
              <Building2 className="text-blue-600 mb-2" />
  
              <p className="text-sm text-gray-500">
                Department
              </p>
  
              <h3 className="font-semibold">
                {analysis.department}
              </h3>
  
            </div>
  
          </div>
  
          {/* Emotion */}
  
          <div className="mt-5 bg-slate-50 rounded-xl p-4">
  
            <p className="text-sm text-gray-500">
              Customer Emotion
            </p>
  
            <h3 className="font-semibold text-lg mt-1">
  
              {emotionEmoji[analysis.emotion]} {analysis.emotion}
  
            </h3>
  
          </div>
  
          {/* Summary */}
  
          <div className="mt-5">
  
            <p className="font-semibold flex items-center gap-2">
  
              <AlertTriangle size={18} />
  
              Summary
  
            </p>
  
            <p className="text-gray-600 mt-2">
  
              {analysis.summary}
  
            </p>
  
          </div>
  
          {/* Recommendation */}
  
          <div className="mt-6 rounded-xl bg-blue-50 border border-blue-200 p-4">
  
            <div className="flex items-center gap-2">
  
              <BadgeCheck
                className="text-blue-600"
                size={20}
              />
  
              <h3 className="font-semibold">
  
                AI Recommendation
  
              </h3>
  
            </div>
  
            <p className="text-blue-700 mt-2">
  
              {recommendation}
  
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default AnalysisCard;