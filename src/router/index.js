import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "@/views/mainPage";
import DemosPage from "@/views/demosPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
    children: [
      { path: "/demos", component: DemosPage }
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
