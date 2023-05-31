import VueRouter from "vue-router";
import Nprogress from "nprogress";
// import { lazyLoad } from "./utils";
import Login from "../views/login/index.vue";
import NotFound from "../views/notFound/index.vue";

// 默认路由
const DEFAULT_ROUTERS = [
  {
    path: "/",
    redirect: {
      path: "/login",
    },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/404",
    component: NotFound,
    name: "NotFound",
  },
];

const router = new VueRouter({ mode: "history", routes: DEFAULT_ROUTERS });
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
// const generateRoutersByMenu = (menus) => {
//   let addRoutes = [];
//   function pushRoute(menus, addRoutes) {
//     if (menus && menus.length > 0) {
//       menus.forEach((v) => {
//         if (v.children?.length > 0) {
//           pushRoute(v.children, addRoutes);
//         } else {
//           addRoutes.push({
//             meta: { name: v.name },
//             path: v.path,
//             component: lazyLoad(v.templatePath),
//           });
//         }
//       });
//     }
//   }
//   pushRoute(menus, addRoutes);
//   return addRoutes;
// };

router.beforeEach(async (form, to, next) => {
  Nprogress.start();
  next();
});
router.afterEach(() => {
  Nprogress.done();
});

export default router;
