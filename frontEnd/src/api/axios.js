import axios from "axios";

const net = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: { "Content-Type": "multipart/form-data" },
});

export { net };
