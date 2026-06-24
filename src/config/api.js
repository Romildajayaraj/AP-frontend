import axios from "axios";

const API = import.meta.env.VITE_API || "http://localhost:5000"; // Fallback to localhost if VITE_API is not defined

export const api = axios.create({
  baseURL: `${API}/api`,
  withCredentials: true,
});
