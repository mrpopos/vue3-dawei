import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routesWhite from './routesWhite.ts'
import { useUserStore } from '@/store/modules/user.ts'

const routes: Array<RouteRecordRaw> = []

const modules = import.meta.glob('./modules/*.ts', { eager: true })
for (const path in modules) {
  const module = modules[path]
  // console.log('module', module)
  routes.push(...(module.default as RouteRecordRaw[]))
}

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_MODE === 'hash'
      ? createWebHashHistory()
      : createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log('to, from, next', to.path, from.path)
  if (routesWhite.includes(to.path) || useUserStore().accessToken) {
    NProgress.start()
    next()
  } else {
    next('/login')
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
