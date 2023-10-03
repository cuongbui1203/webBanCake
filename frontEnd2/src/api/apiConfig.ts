import axios from "axios";

const net = axios.create({
  baseURL: import.meta.env.VITE_BE_API_ENDPOINT as string,
  headers:{
    "Content-Type":"multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  }
});

// net.interceptors.

export default net;