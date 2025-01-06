import { defineStore } from 'pinia'
import { IUserInfo, IUserLogin } from '@/api/user/types'
import { login } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {} as IUserInfo,
    }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo
    },
    clearUserInfo() {
      this.userInfo = {} as IUserInfo
    },
    async login(data: IUserLogin) {
      const res = await login(data)
      console.log('res', res)
      this.setUserInfo(res.userInfo)
      return res
    },
  },
  // 持久化配置
  persist: {
    key: 'userInfo',
    storage: localStorage,
  },
})
