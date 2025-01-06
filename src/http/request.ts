import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from 'axios'
import { getStatusMsg } from './status'

interface IResponse<T> {
  code: number
  data: T
  message: string
}

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    if (error.response) {
      console.log('请求失败：' + getStatusMsg(error.response.status))
    } else {
      console.log('请求失败：' + error.message)
    }
    return Promise.reject(error)
  }
)

const client = {
  get: <T>(url: string, params?: unknown) =>
    instance
      .get(url, { params })
      .then((data: AxiosResponse<IResponse<T>>) => data.data),
  post: <T>(url: string, data?: unknown) =>
    instance
      .post(url, data)
      .then((data: AxiosResponse<IResponse<T>>) => data.data),
  put: <T>(url: string, data?: unknown) =>
    instance
      .put(url, data)
      .then((data: AxiosResponse<IResponse<T>>) => data.data),
  delete: <T>(url: string, params?: unknown) =>
    instance
      .delete(url, { params })
      .then((data: AxiosResponse<IResponse<T>>) => data.data),
}

export default client
