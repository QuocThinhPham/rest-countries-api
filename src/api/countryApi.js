import axiosClient from "./axiosClient";

const countryApi = {
  getAll: () => {
    const url = "/all";
    return axiosClient.get(url);
  },
  getByAlphaCode: (alpha3Code) => {
    const url = `/alpha/${alpha3Code}`;
    return axiosClient.get(url);
  },
  getByName: (name) => {
    const url = `/name/${name}`;
    return axiosClient.get(url);
  },
};

export default countryApi;
