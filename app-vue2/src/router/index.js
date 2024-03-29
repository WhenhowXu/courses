import VueRouter from "vue-router";
import Nprogress from "nprogress";
import { lazyLoad } from "./utils";
import Login from "../views/login/index.vue";
import NotFound from "../views/notFound/index.vue";
import store from "@/store";
import { getToken } from "@/utils/auth";

// 默认路由
const DEFAULT_ROUTERS = [
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

function formatMenusToRoutes(menus) {
  function getChildren(items, children) {
    if (items?.length) {
      items.forEach((v) => {
        if (v.templatePath && v.path) {
          children.push({
            path: v.path,
            component: lazyLoad(v.templatePath),
            meta: { name: v.name },
          });
        }
        if (v.children?.length) {
          getChildren(v.children, children);
        }
      });
    }
  }
  let children = [];
  getChildren(menus, children);
  return {
    children,
    component: lazyLoad("main"),
    path: "/",
    redirect: children?.[0]?.path,
  };
}
function getPermissions() {
  if (store.state.menus?.length > 0) {
    return Promise.resolve();
  } else {
    return store.dispatch("queryPermissions").then((menus) => {
      const route = formatMenusToRoutes(menus);
      router.addRoute(route);
    });
  }
}

router.beforeEach(async (to, from, next) => {
  const token = getToken();
  if (token) {
    if (to.path === "/login") {
      getPermissions(router).then(() => {
        next({ path: "/" });
      });
    } else {
      getPermissions(router).then(() => {
        next();
      });
    }
  } else {
    store.dispatch("auth/logout").then(() => {
      next({ path: "/login" });
    });
  }
  Nprogress.start();
  next();
});
router.afterEach(() => {
  Nprogress.done();
});

export default router;
