import VueRouter from "vue-router";
import Vue from "vue";
import Nprogress from "nprogress";

Vue.use(VueRouter);
const defaultRoutes = [
  { path: "/", redirect: "/demo" },
  { path: "/demo", component: () => import("@/views/demo") },
  { path: "/login", component: () => import("@/views/Login") },
  { path: "/404", component: () => import("@/views/NotFound") },
  {
    path: "/simple-search-table",
    component: () => import("@/views/SimpleSearchTable"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes: defaultRoutes,
});

router.beforeEach(async (form, to, next) => {
  Nprogress.start();
  next();
});
router.afterEach(() => {
  Nprogress.done();
});
export default router;
