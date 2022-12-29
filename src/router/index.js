import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
   routes: [
       {
           path: "/",
           component: () => import("@/views/Home.vue"),
           children: [
               {
                   path: "",
                   name: "home",
                   component: () => import("@/views/HomeGlobal.vue")
               },
               {
                   path: "my-feed",
                   name: "home-my-feed",
                   component: () => import("@/views/HomeMyFeed.vue")
               },
               {
                   path: "tag/:tag",
                   name: "home-tag",
                   component: () => import("@/views/HomeTag.vue")
               }
           ]
       },
       {
           name: "login",
           path: "/login",
           component: () => import("@/views/Login.vue")
       }
   ]
});