import VueRouter from "vue-router";
import Vue from "vue";
import Nprogress from "nprogress";

Vue.use(VueRouter);
function lazyLoad(path) {
  return () => import(`@/views/${path}`);
}
export const MEUNS = [
  {
    name: "Tables",
    icon: "table",
    path: "table",
    children: [
      {
        name: "带搜索表格",
        icon: "table",
        path: "/tables/searchTable",
        templatePath: "tables/searchTable",
      },
      {
        name: "表格2",
        icon: "table",
        path: "/tables/test02",
        templatePath: "tables/test2",
      },
    ],
  },
  {
    name: "Forms",
    icon: "form",
    path: "form",
    children: [
      {
        name: "表格1",
        icon: "table",
        path: "t1-01",
      },
    ],
  },
  {
    name: "VueDirectives",
    icon: "table",
    path: "vueDirectives",
    children: [
      { name: "防抖", path: "t1-01" },
      { name: "水印", path: "t1-01" },
    ],
  },
];
const generateRoutersByMenu = (menus) => {
  let addRoutes = [];
  function pushRoute(menus, addRoutes) {
    if (menus && menus.length > 0) {
      menus.forEach((v) => {
        if (v.children?.length > 0) {
          pushRoute(v.children, addRoutes);
        } else {
          addRoutes.push({
            meta: { name: v.name },
            path: v.path,
            component: lazyLoad(v.templatePath),
          });
        }
      });
    }
  }
  pushRoute(menus, addRoutes);
  return addRoutes;
};

const defaultRoutes = [
  {
    path: "/",
    component: lazyLoad("main"),
    children: generateRoutersByMenu(MEUNS),
    // [
    //   {
    //     path: "/tables/test01",
    //     component: lazyLoad("tables/test1"),
    //     meta: { name: "KKKK" },
    //   },
    //   {
    //     path: "/tables/test02",
    //     component: lazyLoad("tables/test2"),
    //     meta: { name: "YYYY" },
    //   },
    // ],
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
