import TicketItem from "./TicketItem";

function TicketList({
  tickets,
  onSelect,
}) {
  return (
    <div className="space-y-4">

      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          onSelect={onSelect}
        />
      ))}

    </div>
  );
}

export default TicketList;