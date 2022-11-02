import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "@/views/mainPage";
import DemosPage from "@/views/demosPage";
import DemoListPage from "@/views/demoListPage";
import DemoDetailPage from "@/views/demoDetailPage";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/demo-list" },
  {
    path: "/",
    name: "home",
    component: MainPage,
    children: [
      { path: "/demo-list", component: DemoListPage },
      { path: "/demo-detail", component: DemoDetailPage },
      { path: "/demos", component: DemosPage },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
