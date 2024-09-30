import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { farmNoticeRouter } from "./farmNoticeRouter";
import { couponRouter } from "./couponRouter";
import { sellerRouter } from '@/router/sellerRouter';
import { memberRouter } from "./memberRouter";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  ...farmNoticeRouter,
  ...couponRouter,
  ...sellerRouter,
  ...memberRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
