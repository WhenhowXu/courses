import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import store from "@/store";
import router from "@/router";
import directives from "@/directives";
import HaoUI from "@xuwenhao/first-project/dist/test.common";
import plTable from "pl-table";
import "pl-table/themes/index.css";
import "pl-table/themes/plTableStyle.css";
import VXETable from "vxe-table";

Vue.use(plTable);
Vue.use(VXETable);
Vue.use(directives).use(Antd).use(HaoUI);

Vue.config.productionTip = false;

Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
