import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://talent-iq-backend-1jv1.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;