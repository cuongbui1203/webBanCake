import axios from "axios";

const net = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

net.interceptors.response.use((res) => {
  // console.log(res.data);
  return res;
});

export default net;
