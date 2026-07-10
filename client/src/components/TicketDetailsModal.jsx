import {
    X,
    Ticket,
    Building2,
    Flag,
    Calendar,
    CircleDot,
    FileText,
  } from "lucide-react";
  
  function TicketDetailsModal({ ticket, onClose }) {
    if (!ticket) return null;
    console.log(ticket);
    
    
      const priorityColor = {
        High: "bg-red-100 text-red-600",
        Medium: "bg-yellow-100 text-yellow-700",
        Low: "bg-green-100 text-green-600",
      };
    
      const createdSeconds =
        ticket.createdAt?.seconds ??
        ticket.createdAt?._seconds;

  
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
  
        <div className="bg-white rounded-3xl w-[650px] shadow-2xl overflow-hidden">
  
          {/* Header */}
  
          <div className="bg-blue-600 text-white px-6 py-5 flex justify-between items-center">
  
            <div className="flex items-center gap-3">
  
              <Ticket />
  
              <div>
  
                <h2 className="text-xl font-bold">
                  {ticket.id}
                </h2>
  
                <p className="text-blue-100">
                  Support Ticket Details
                </p>
  
              </div>
  
            </div>
  
            <button onClick={onClose}>
              <X />
            </button>
  
          </div>
  
          {/* Body */}
  
          <div className="p-6 space-y-5">
  
            <div className="grid grid-cols-2 gap-5">
  
              <Info
                icon={<Building2 size={18} />}
                title="Department"
                value={ticket.department}
              />
  
              <Info
                icon={<Flag size={18} />}
                title="Priority"
                value={
                  <span
                    className={`px-3 py-1 rounded-full ${priorityColor[ticket.priority]}`}
                  >
                    {ticket.priority}
                  </span>
                }
              />

<Info
  icon={<FileText size={18} />}
  title="Issue Type"
  value={ticket.issueType}
/>

<Info
  icon={<CircleDot size={18} />}
  title="Customer Emotion"
  value={ticket.emotion}
/>
              <Info
                icon={<CircleDot size={18} />}
                title="Status"
                value={ticket.status}
              />
  
              
              <Info
  icon={<Calendar size={18} />}
  title="Created"
  value={
    createdSeconds
      ? new Date(createdSeconds * 1000).toLocaleString()
      : "Just now"
  }
/>

  
            </div>
  
            <div className="border rounded-xl p-5 bg-slate-50">
  
              <div className="flex items-center gap-2 font-semibold mb-3">
  
                <FileText size={18} />
  
                AI Summary
  
              </div>
  
                <p className="text-gray-700 leading-7">{ticket.summary}</p>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  function Info({ icon, title, value }) {
    
    return (
      <div className="border rounded-xl p-4">
  
        <div className="flex items-center gap-2 text-gray-500 text-sm">
  
          {icon}
  
          {title}
  
        </div>
  
        <div className="mt-2 font-semibold">
          {value}
        </div>
  
      </div>
    );
  }
  
  export default TicketDetailsModal;