function RecentTickets({ tickets }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 border">
  
        <h2 className="text-xl font-bold mb-5">
          Recent Tickets
        </h2>
  
        <div className="space-y-4">
  
          {tickets.map(ticket => (
  
            <div
              key={ticket.id}
              className="flex justify-between items-center border-b pb-3"
            >
  
              <div>
  
                <h3 className="font-semibold">
                  {ticket.id}
                </h3>
  
                <p className="text-gray-500 text-sm">
                  {ticket.department}
                </p>
  
              </div>
  
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  ticket.priority === "High"
                    ? "bg-red-100 text-red-600"
                    : ticket.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {ticket.priority}
              </span>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
    );
  }
  
  export default RecentTickets;