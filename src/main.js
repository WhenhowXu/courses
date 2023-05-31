import "@/styles/themes/index.less";
import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import store from "@/store";
import router from "@/router";
import directives from "@/directives";
import plTable from "pl-table";
import "pl-table/themes/index.css";
import "pl-table/themes/plTableStyle.css";
import VXETable from "vxe-table";
import "xe-utils";
import "vxe-table/lib/style.css";
import HaoTable from "@/components/HaoTable";
import "@/assets/icons";
require("@/apiMock");

Vue.use(VueRouter);
Vue.use(plTable);
Vue.use(VXETable);
Vue.use(directives).use(Antd).use(HaoTable);
Vue.config.productionTip = false;

store.dispatch("settings/updateLoginElements");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
