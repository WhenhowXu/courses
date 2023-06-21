import axios from "axios";
const _axios = axios.create();
_axios.interceptors.request.use((config) => {
  return config;
});
_axios.interceptors.response.use((response) => {
  return response.data;
});
export { _axios as axios };
