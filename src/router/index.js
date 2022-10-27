import StartPage from "@/pages/StartPage";
import PostPage from "@/pages/PostPage";
import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "@/pages/AboutApp";

const routes = [
  {
    path: "/",
    component: StartPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutApp,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
