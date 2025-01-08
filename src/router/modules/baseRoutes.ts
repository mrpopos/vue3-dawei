import { RouteRecordRaw } from 'vue-router'
import LayoutPage from '@/layout/index.vue'

const baseRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    name: 'Layout',
    component: LayoutPage,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.tsx'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
]

export default baseRoutes
