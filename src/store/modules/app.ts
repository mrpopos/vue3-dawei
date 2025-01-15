import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    breadcrumb: [] as string[],
  }),
  // can namespaced by folders name.
  getters: {},
  actions: {
    setBreadcrumb(breadcrumb: string[]) {
      this.breadcrumb = breadcrumb
    },
  },
  // 持久化配置
  persist: {
    key: 'app',
    storage: localStorage,
    pick: ['breadcrumb'],
  },
  // ...a lot of options
})
