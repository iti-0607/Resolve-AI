function TicketItem({ ticket, onSelect }) {
    return (
      <div
        onClick={() => onSelect(ticket)}
        className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md cursor-pointer transition"
      >
        <div className="flex justify-between">
  
          <div>
  
            <h3 className="font-bold text-lg">
              {ticket.id}
            </h3>
  
            <p className="text-gray-500">
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
  
        <div className="mt-4 flex justify-between text-sm text-gray-500">
  
          <span>{ticket.status}</span>
  
          <span>
            {ticket.createdAt?.seconds
  ? new Date(ticket.createdAt.seconds * 1000).toLocaleDateString()
  : "-"}
          </span>
  
        </div>
  
      </div>
    );
  }
  
  export default TicketItem;