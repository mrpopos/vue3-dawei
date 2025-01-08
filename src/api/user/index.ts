import client from '@/http/request'
import {
  IUserInfo,
  IUserLogin,
  ILoginResponse,
  IUserPageResponse,
  IPageQuery,
} from './types'

export function login(data: IUserLogin) {
  return client.post<ILoginResponse<IUserInfo>>('/login', data)
}

export function page(params: IPageQuery) {
  return client.get<IUserPageResponse>('/page', params)
}
