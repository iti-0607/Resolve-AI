function Sidebar() {
    return (
      <div className="w-72 bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-8">
          ResolveAI
        </h1>
  
        <div className="space-y-3">
  
          <div className="bg-slate-800 p-3 rounded-lg">
            💬 Customer Support
          </div>
  
          <div className="bg-slate-800 p-3 rounded-lg">
            🎫 Tickets
          </div>
  
          <div className="bg-slate-800 p-3 rounded-lg">
            📊 Dashboard
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Sidebar;