import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2818/api/v1",
  headers: {
    "content-type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    if (response && response.data) return response.data;
    else return response;
  },
  function (error) {
    throw error;
  }
);

export default instance;
