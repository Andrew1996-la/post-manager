import StartPage from "@/pages/StartPage";
import PostPage from "@/pages/PostPage";
import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "@/pages/AboutApp";
import NotFound from "@/pages/NotFound";
import PostById from "@/pages/PostById";

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
  {
    path: "/posts/:title:body",
    component: PostById,
    name: "postById",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
