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
import HaoUI from "@/components";
import HaoComponentsVue from "@xuwenhao/hao-components-vue/lib/hao-ui.umd";

import "@/assets/icons";

Vue.use(plTable);
Vue.use(VXETable);
Vue.use(HaoComponentsVue);
Vue.use(directives).use(Antd).use(HaoUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
