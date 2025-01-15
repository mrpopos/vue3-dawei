import { RouteRecordRaw } from 'vue-router'
import LayoutPage from '@/layout/index.vue'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/home',
    meta: { title: '首页', hide: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LayoutPage,
    meta: {
      title: '首页',
      hide: false,
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hide: false,
          pName: 'Dashboard',
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'System',
    component: LayoutPage,
    meta: {
      title: '系统管理',
      hide: false,
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户管理',
          hide: false,
          pName: 'System',
        },
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/role/index.vue'),
        meta: {
          title: '角色管理',
          hide: false,
          pName: 'System',
        },
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/menu/index.vue'),
        meta: {
          title: '菜单管理',
          hide: false,
          pName: 'System',
        },
      },
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/permission/index.vue'),
        meta: {
          title: '权限管理',
          hide: false,
          pName: 'System',
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
      hide: false,
    },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.tsx'),
        meta: {
          title: '关于我们',
          hide: false,
          pName: 'Platform',
        },
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/contact/index.tsx'),
        meta: {
          title: '联系我们',
          hide: false,
          pName: 'Platform',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hide: true,
    },
  },
]

export default baseRoutes
