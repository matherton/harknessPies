import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";
import HomeView from "../Home.vue";
import MemberView from "../Member.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/member",
      name: "member",
      component: MemberView,
      beforeEnter: authGuard,
    },
  ],
});

export default router;
