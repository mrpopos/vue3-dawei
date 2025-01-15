import { defineStore } from 'pinia'
import { IUserInfo, IUserLogin } from '@/api/user/types'
import { login } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        username: '',
        avatar: '',
      } as IUserInfo,
      accessToken: '',
    }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo
    },
    setAccessToken(token: string) {
      this.accessToken = token
    },
    removeUserInfo() {
      this.userInfo = {} as IUserInfo
    },
    removeAccessToken() {
      this.accessToken = ''
    },
    async login(data: IUserLogin) {
      const res = await login(data)
      this.setUserInfo(res.data.userInfo)
      this.setAccessToken(res.data.accessToken)
      return res
    },
    logout() {
      this.removeUserInfo()
      this.removeAccessToken()
    },
  },
  // 持久化配置
  persist: {
    key: 'userInfo',
    storage: localStorage,
    pick: ['userInfo', 'accessToken'],
  },
})
