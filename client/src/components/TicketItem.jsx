import {
  Calendar,
  Building2,
  CircleDot,
  ArrowRight,
} from "lucide-react";

function TicketItem({ ticket, onSelect }) {
  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <div
      onClick={() => onSelect(ticket)}
      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-bold">
            🎫 {ticket.id}
          </h2>

          <div className="flex items-center gap-2 mt-2 text-gray-500">

            <Building2 size={16} />

            {ticket.department}

          </div>

        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${priorityColor[ticket.priority]}`}
        >
          {ticket.priority}
        </span>

      </div>

      {/* Divider */}

      <div className="border-t my-5"></div>

      {/* Bottom */}

      <div className="flex justify-between items-center">

        <div className="space-y-2">

          <div className="flex items-center gap-2 text-gray-600">

            <CircleDot
              size={16}
              className="text-green-600"
            />

            {ticket.status}

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <Calendar size={16} />

            {ticket.createdAt?.seconds
              ? new Date(
                  ticket.createdAt.seconds * 1000
                ).toLocaleString()
              : "-"}

          </div>

        </div>

        <button
          className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
        >
          View Details

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}

export default TicketItem;