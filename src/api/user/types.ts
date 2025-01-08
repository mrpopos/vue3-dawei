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

export interface IUserRecord {
  id: number
  username: string
  age: number
  gender: number
  avatar: string
  email: string
  phone: string
  address: string
  password?: string
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

export interface IUserPageResponse<T = IUserRecord> {
  list: Array<T>
  total: number
}

export interface IPageQuery {
  pageSize: number
  pageNum: number
}
