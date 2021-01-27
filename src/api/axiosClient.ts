/**
 * api/axiosClient.js
 * 
 * desc: Set up default config for http requests
 * Please have a look at here `https://github.com/axios/axios#request config` for the full list of configs
 */ 
import axios, { AxiosInstance } from "axios";
import queryString from "query-string";

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api',//process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
