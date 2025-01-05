import client from '@/http/request'

interface IUserLogin {
  username: string
  password: string
}

interface IUserInfo {
  username: string
  avatar: string
}

interface ILoginResponse<T> {
  userInfo: T
  accessToken: string,
  refreshToken?: string,
  role: string[]
}

export function login(data: IUserLogin) {
  return client.post<ILoginResponse<IUserInfo>>('/login', data)
}
