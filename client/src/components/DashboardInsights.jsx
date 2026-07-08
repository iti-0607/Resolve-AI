function DashboardInsights({ stats }) {

    const insights = [];
  
    if (stats.highPriority > 0) {
  
      const percent = Math.round(
        (stats.highPriority / stats.totalTickets) * 100
      );
  
      insights.push(
        `${percent}% of tickets are High Priority.`
      );
  
    }
  
    if (stats.topDepartment) {
  
      insights.push(
        `${stats.topDepartment[0]} currently receives the highest number of support requests.`
      );
  
    }
  
    if (stats.openTickets === stats.totalTickets) {
  
      insights.push(
        "All tickets are currently open and waiting for resolution."
      );
  
    }
  
    if (stats.totalTickets >= 10) {
  
      insights.push(
        "Support volume is increasing compared to the initial dataset."
      );
  
    }
  
    return (
  
      <div className="bg-white rounded-2xl shadow-md border p-6">
  
        <h2 className="text-xl font-bold mb-5">
  
          🧠 AI Insights
  
        </h2>
  
        <ul className="space-y-4">
  
          {insights.map((item, index) => (
  
            <li
              key={index}
              className="text-gray-700"
            >
  
              • {item}
  
            </li>
  
          ))}
  
        </ul>
  
      </div>
  
    );
  
  }
  
  export default DashboardInsights;