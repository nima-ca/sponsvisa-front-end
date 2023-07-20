import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-type": `application/json`,
  },
  withCredentials: true,
});

export default api;
