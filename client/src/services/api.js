import axios from "axios";

const API = "http://localhost:5000";

export const sendMessage = async (messages) => {
  const response = await axios.post(`${API}/chat`, {
    messages,
  });

  return response.data;
};