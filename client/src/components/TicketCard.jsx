import {
  Ticket,
  Calendar,
  Building2,
  Flag,
} from "lucide-react";

function TicketCard({ ticket }) {
  if (!ticket) return null;

  return (
    <div className="bg-white border rounded-2xl shadow-lg mt-6 overflow-hidden">

      <div className="bg-green-600 text-white p-4 flex items-center gap-3">

        <Ticket />

        <div>

          <h2 className="font-bold">
            Support Ticket Created
          </h2>

          <p className="text-green-100 text-sm">
            Your request has been registered.
          </p>

        </div>

      </div>

      <div className="p-5 space-y-4">

        <div className="flex justify-between">
          <span>Ticket ID</span>
          <strong>{ticket.id}</strong>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <strong>{ticket.status}</strong>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Building2 size={18}/>
            Department
          </span>

          <strong>{ticket.department}</strong>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Flag size={18}/>
            Priority
          </span>

          <strong>{ticket.priority}</strong>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Calendar size={18}/>
            Created
          </span>

          <strong>
  {ticket.createdAt?.seconds
    ? new Date(ticket.createdAt.seconds * 1000).toLocaleString()
    : "Just now"}
</strong>
        </div>

      </div>

    </div>
  );
}

export default TicketCard;