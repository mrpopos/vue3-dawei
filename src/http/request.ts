import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from 'axios'
import { getStatusMsg } from './status'

interface BaseResponse<T> {
  code: number
  data: T
  message: string
}

const instance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_APP_MOCK_ENABLE === 'true'
      ? import.meta.env.VITE_APP_MOCK_BASEURL
      : import.meta.env.VITE_APP_API_BASEURL,
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
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      return Promise.reject(
        new Error('请求失败：' + getStatusMsg(response.status))
      )
    }
  },
  (error: AxiosError) => {
    let errorMessage = ''
    if (error.response) {
      errorMessage = getStatusMsg(error.response.status)
    } else {
      errorMessage = '请求失败：' + error.message
    }
    return Promise.reject(new Error('请求失败：' + errorMessage))
  }
)

const client = {
  get: <T>(url: string, params?: unknown) =>
    instance
      .get(url, { params })
      .then((data: AxiosResponse<BaseResponse<T>>) => data.data),
  post: <T>(url: string, data?: unknown) =>
    instance
      .post(url, data)
      .then((data: AxiosResponse<BaseResponse<T>>) => data.data),
  put: <T>(url: string, data?: unknown) =>
    instance
      .put(url, data)
      .then((data: AxiosResponse<BaseResponse<T>>) => data.data),
  delete: <T>(url: string, params?: unknown) =>
    instance
      .delete(url, { params })
      .then((data: AxiosResponse<BaseResponse<T>>) => data.data),
}

export default client
