import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/passgen",
    name: "Passgen",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PassGen.vue"),
  },
  {
    path: "/dishes",
    name: "Dishes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dishes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
