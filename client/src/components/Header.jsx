import {
    Bell,
    CalendarDays,
    Bot,
    CircleUserRound,
  } from "lucide-react";
  
  function Header() {
    const today = new Date();
  
    return (
      <div className="h-20 bg-white border-b border-slate-200 shadow-sm px-8 flex items-center justify-between">
  
        {/* Left */}
  
        <div className="flex items-center gap-4">
  
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
  
            <Bot size={24} />
  
          </div>
  
          <div>
  
            <h1 className="text-2xl font-bold text-slate-900">
              ResolveAI
            </h1>
  
            <p className="text-sm text-slate-500">
              AI Customer Care Assistant
            </p>
  
          </div>
  
        </div>
  
        {/* Right */}
  
        <div className="flex items-center gap-6">
  
          {/* Date */}
  
          <div className="hidden md:flex items-center gap-2 text-slate-500">
  
            <CalendarDays size={18} />
  
            <span>
              {today.toLocaleDateString()}
            </span>
  
          </div>
  
          {/* Notification */}
  
          <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">
  
            <Bell size={20} />
  
          </button>
  
          {/* Online */}
  
          <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
  
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
  
            <span className="text-green-700 font-medium">
              Online
            </span>
  
          </div>
  
          {/* User */}
  
          <button className="w-11 h-11 rounded-full bg-slate-200 hover:bg-slate-300 transition flex items-center justify-center">
  
            <CircleUserRound size={24} />
  
          </button>
  
        </div>
  
      </div>
    );
  }
  
  export default Header;