import axios from "axios";

const instance = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/json",
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
