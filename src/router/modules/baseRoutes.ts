import { RouteRecordRaw } from 'vue-router'
import LayoutPage from '@/layout/index.vue'

const baseRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: '/dashboard/home' },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LayoutPage,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          // icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/platform',
    name: 'Platform',
    component: LayoutPage,
    meta: {
      title: '平台管理',
      // icon: 'HomeFilled',
    },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.tsx'),
        meta: {
          title: '关于我们',
          // icon: 'HomeFilled',
        },
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/contact/index.tsx'),
        meta: {
          title: '联系我们',
          // icon: 'HomeFilled',
        },
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
