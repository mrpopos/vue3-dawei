import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { getStatusMsg } from "./status";

interface IResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.log("请求失败：" + getStatusMsg(error.response.status));
    } else {
      console.log("请求失败：" + error.message);
    }
    return Promise.reject(error);
  }
);

const client = {
  get: <T>(url: string, params?: any) => instance.get(url, { params }).then((data: AxiosResponse<IResponse<T>>) => data),
  post: <T>(url: string, data?: any) => instance.post(url, data).then((data: AxiosResponse<IResponse<T>>) => data),
  put: <T>(url: string, data?: any) => instance.put(url, data).then((data: AxiosResponse<IResponse<T>>) => data),
  delete: <T>(url: string, params?: any) => instance.delete(url, { params }).then((data: AxiosResponse<IResponse<T>>) => data),
};

export default client;
