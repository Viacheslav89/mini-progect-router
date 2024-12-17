import { createRouter, createWebHistory } from "vue-router";
import App from "./../App.vue";
import AppUserList from "./../components/AppUsersList.vue";
import AppUserDetails from "./../components/AppUserDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      redirect: "/users",
      component: App,
      children: [
        {
          name: "Users",
          path: "/users/",
          component: AppUserList,
        },
        {
          name: "Details",
          path: "/users/:id/",
          component: AppUserDetails,
        },
      ],
    },
  ],
});

export default router


