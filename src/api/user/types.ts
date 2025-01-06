export interface IUserLogin {
  username: string
  password: string
}

export interface IUserInfo {
  username: string
  avatar: string
}

export interface ILoginResponse<T = IUserInfo> {
  userInfo: T
  accessToken: string
  refreshToken?: string
  role: string[]
}
