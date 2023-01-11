import axios from "axios";

const baseURL = "http://localhost:3300";

const axiosBase = axios.create({
  baseURL,
  timeout: 3 * 60 * 1000,
});

const http = () => {
  axiosBase.interceptors.request.use(
    async (config: any) => {
      // Get user token
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosBase;
};

export default http;
