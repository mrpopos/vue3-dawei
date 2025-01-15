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
import { useAppStore } from '@/store/modules/app.ts'

const routes: Array<RouteRecordRaw> = []

const modules = import.meta.glob('./modules/*.ts', { eager: true })
for (const path in modules) {
  const module = modules[path]
  routes.push(...(module.default as RouteRecordRaw[]))
}

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_MODE === 'hash'
      ? createWebHashHistory()
      : createWebHistory(),
  routes,
})

// 面包屑导航
function handleBreadcrumb(toName: string): string[] {
  const rs = router.getRoutes().filter((r) => !r.meta.hide)
  const names: string[] = []
  while (true) {
    names.push(toName)
    const curRoute = rs.find((r) => r.name === toName)
    const parRoute = rs.find((r) => r.name === curRoute?.meta?.pName)
    if (parRoute) {
      toName = parRoute.name as string
      continue
    } else {
      break
    }
  }

  return names.reverse()
}

router.beforeEach((to, from, next) => {
  if (routesWhite.includes(to.path) || useUserStore().accessToken) {
    NProgress.start()
    // 面包屑导航
    const breadcrumbData = handleBreadcrumb(to.name as string)
    useAppStore().setBreadcrumb(breadcrumbData)
    next()
  } else {
    next('/login')
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
