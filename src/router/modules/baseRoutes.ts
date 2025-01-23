import { RouteRecordRaw } from 'vue-router'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    meta: { title: '首页', hide: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/service/index.tsx'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.tsx'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/index.vue'),
  },
]

export default baseRoutes
