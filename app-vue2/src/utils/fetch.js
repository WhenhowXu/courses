import axios from "axios";
import { message } from "ant-design-vue";

const instance = axios.create({
  timeout: 60 * 1000,
});

instance.interceptors.request.use((config) => {
  return config;
});
instance.interceptors.response.use((response) => {
  const res = response.data;
  console.log(res, "---res");
  if (res?.code === 0) {
    return res?.data;
  } else {
    message.error(res?.message || "请求异常，请稍后重试");
    return Promise.reject(res.data);
  }
});
export default instance;
