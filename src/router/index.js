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
    component: () => import(/* webpackChunkName: "about" */ "../views/PassGen"),
  },
  {
    path: "/dishes",
    name: "Dishes",
    component: () => import(/* webpackChunkName: "about" */ "../views/Dishes"),
  },
  {
    path: "/guess",
    name: "Guess",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GuessView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
