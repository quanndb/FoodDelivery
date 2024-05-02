import axios from "src/services/api";

const profileAPI = {
  updateProfile: (params, headers) => {
    const url = "/profile";
    return axios.post(url, params, headers);
  },
  getProfile: (url, headers) => {
    return axios.get(url, headers);
  },
};

export default profileAPI;
