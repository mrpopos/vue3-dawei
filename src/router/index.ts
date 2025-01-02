import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.tsx"),
  },
];

export default createRouter({
  history: import.meta.env.VITE_ROUTER_MODE === "hash" ? createWebHashHistory() : createWebHistory(),
  routes,
});
