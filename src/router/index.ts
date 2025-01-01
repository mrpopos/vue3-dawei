import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
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
];

export default createRouter({
  history: import.meta.env.VITE_ROUTER_MODE === "hash" ? createWebHashHistory() : createWebHistory(),
  routes,
});
