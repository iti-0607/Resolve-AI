import axios from "axios";

const API = "https://resolve-ai-backend-dm03.onrender.com";

// Chat API
export const sendMessage = async (messages) => {
  const response = await axios.post(`${API}/chat`, {
    messages,
  });

  return response.data;
};

// Create Ticket API
export const createTicket = async (analysis) => {
  const response = await axios.post(`${API}/create-ticket`, {
    analysis,
  });

  return response.data;
};

// Get Tickets
export const getTickets = async () => {
  const response = await axios.get(`${API}/tickets`);

  return response.data;
};

// Dashboard Stats
export const getDashboardStats = async () => {
  const response = await axios.get(`${API}/dashboard-stats`);

  return response.data;
};