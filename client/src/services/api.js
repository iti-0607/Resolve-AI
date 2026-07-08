import axios from "axios";

const API = "http://localhost:5000";

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