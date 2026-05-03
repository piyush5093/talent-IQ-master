import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://talent-iq-backend-1jv1.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;