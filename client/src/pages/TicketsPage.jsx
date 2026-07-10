import { useEffect, useState } from "react";

import { getTickets } from "../services/api";

import TicketList from "../components/TicketList";
import TicketDetailsModal from "../components/TicketDetailsModal";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function TicketsPage() {

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedTicket, setSelectedTicket] = useState(null);

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

  return (

    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <div className="flex-1 overflow-y-auto p-8">

          <h1 className="text-3xl font-bold mb-6">
            Support Tickets
          </h1>

          {loading ? (

            <div className="text-gray-500">
              Loading Tickets...
            </div>

          ) : (

            <TicketList
              tickets={tickets}
              onSelect={setSelectedTicket}
            />

          )}

        </div>

      </div>

      <TicketDetailsModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
      />

    </div>

  );

}

export default TicketsPage;