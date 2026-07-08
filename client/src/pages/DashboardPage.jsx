import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/api";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import StatCard from "../components/StatCard";
import DashboardInsights from "../components/DashboardInsights";
import RecentTickets from "../components/RecentTickets";

function DashboardPage() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    async function fetchStats() {

      try {

        const data = await getDashboardStats();

        setStats(data.stats);

      } catch (err) {

        console.log(err);

      }

    }

    fetchStats();

  }, []);

  if (!stats) return <div>Loading...</div>;

  return (

    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <div className="p-8 space-y-8 overflow-y-auto">

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="Total Tickets"
              value={stats.totalTickets}
              icon="📨"
              color="text-blue-600"
            />

            <StatCard
              title="Open Tickets"
              value={stats.openTickets}
              icon="🟢"
              color="text-green-600"
            />

            <StatCard
              title="High Priority"
              value={stats.highPriority}
              icon="🔴"
              color="text-red-600"
            />

            <StatCard
              title="Departments"
              value={stats.departments}
              icon="🏢"
              color="text-purple-600"
            />

          </div>

          <DashboardInsights stats={stats} />

          <RecentTickets
            tickets={stats.recentTickets}
          />

        </div>

      </div>

    </div>

  );

}

export default DashboardPage;