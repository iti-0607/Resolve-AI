import { Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import ChatPage from "./pages/ChatPage";
import TicketsPage from "./pages/TicketsPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<ChatPage />}
      />

      <Route
        path="/tickets"
        element={<TicketsPage />}
      />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

<Route
    path="/settings"
    element={<SettingsPage />}
/>

    </Routes>
  );
}

export default App;