import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

// const Home = () => import("@/views/Home");
const VuePage = () => import("@/views/vue");
const AntdPage = () => import("@/views/antd");

const routes = [
  { path: "/", name: "home", component: AntdPage },
  { path: "/vue", component: VuePage },
  { path: "/antd", component: AntdPage },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
