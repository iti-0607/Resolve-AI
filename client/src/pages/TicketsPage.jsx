import { useEffect, useState } from "react";
import { getTickets } from "../services/api";
import TicketList from "../components/TicketList";

function TicketsPage() {

  const [tickets, setTickets] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTickets = async () => {

      try {

        const data = await getTickets();

        setTickets(data.tickets);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchTickets();

  }, []);

  if (loading)
    return (
      <div className="p-10">
        Loading Tickets...
      </div>
    );

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">

        Support Tickets

      </h1>

      <TicketList
        tickets={tickets}
        onSelect={(ticket) => console.log(ticket)}
      />

    </div>

  );

}

export default TicketsPage;