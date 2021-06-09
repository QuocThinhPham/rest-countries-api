import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;

    return response;
  },
  (error) => {
    // Handle Error
    throw error;
  }
);

export default axiosClient;
