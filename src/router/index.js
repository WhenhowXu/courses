import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const Home = () => import("@/views/Home");
const VuePage = () => import("@/views/vue");

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/vue/:id", component: VuePage },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
