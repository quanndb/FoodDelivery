import axios from "src/services/googleAPI";

const mapAPI = {
  getLocation: (params) => {
    const url = "";
    return axios.get(url, params);
  },
};

export default mapAPI;
