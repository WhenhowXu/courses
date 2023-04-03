import VueRouter from "vue-router";
import Vue from "vue";
import Nprogress from "nprogress";
Vue.use(VueRouter);
function lazyLoad(path) {
  return () => import(`@/views/${path}`);
}
const defaultRoutes = [
  {
    path: "/",
    component: lazyLoad("main"),
    children: [
      { path: "/tables/test01", component: lazyLoad("tables/test1"), meta: { name: 'KKKK' } },
      { path: "/tables/test02", component: lazyLoad("tables/test2"), meta: { name: 'YYYY' } },
    ],
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
