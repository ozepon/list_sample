import Vue from "vue";
import VueRouter from "vue-router";
// import VueScrollTo from "vue-scrollto";
// const VueScrollTo = require("vue-scrollto");
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/filter_list",
    name: "FilterList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FilterList.vue"),
  },
  {
    path: "/jump_list",
    name: "JumpList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JumpList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else if (to.hash) {
      // VueScrollTo.scrollTo(to.hash, 700);
      return { selector: to.hash, offset: { x: 100, y: 50 } };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
