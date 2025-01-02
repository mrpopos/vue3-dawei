import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getStatusMsg } from "./status";

interface IResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    // return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
