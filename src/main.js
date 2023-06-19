import "@/styles/themes/index.less";
import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import store from "@/store";
import router from "@/router";
import directives from "@/directives";
import HaoFields from "@/components/HaoFields";
import HaoSearchTable from "@/components/HaoSearchTable";
require("@/apiMock");

Vue.use(VueRouter);
Vue.use(directives);
Vue.use(Antd);
Vue.use(HaoFields);
Vue.use(HaoSearchTable);

Vue.config.productionTip = false;

store.dispatch("settings/updateLoginElements");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
