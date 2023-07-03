import axios from "axios";

const baseURL = `https://jsonplaceholder.typicode.com`;

const api = axios.create({
  baseURL,
  headers: {
    "Content-type": `application/json`,
  },
});

export default api;
