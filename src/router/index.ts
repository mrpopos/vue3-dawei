import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const modules = import.meta.glob('./modules/*.ts', { eager: true })
for (const path in modules) {
  const module = modules[path]
  // console.log('module', module)
  routes.push(...(module.default as RouteRecordRaw[]))
}

export default createRouter({
  history:
    import.meta.env.VITE_ROUTER_MODE === 'hash'
      ? createWebHashHistory()
      : createWebHistory(),
  routes,
})
