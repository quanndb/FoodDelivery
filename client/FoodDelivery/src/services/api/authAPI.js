import axios from "src/services";

const authAPI = {
  login: (params) => {
    const url = "/auth/login";
    return axios.post(url, params);
  },
  register: (params) => {
    const url = "/auth/register";
    return axios.post(url, params);
  },
};

export default authAPI;
