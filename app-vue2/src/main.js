import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import store from "@/store";
import router from "@/router";
import directives from "@/directives";
import HaoFields from "@/components/HaoFields";
import HaoSearchTable from "@/components/HaoSearchTable";
import "@/styles/index.less";

Vue.use(VueRouter);
Vue.use(directives);
Vue.use(Antd);
Vue.use(HaoFields);
Vue.use(HaoSearchTable);
Vue.filter("numberFormat", (value, precision = 0) => {
  if (typeof value === "string") {
    let n = Number(value);
    return isNaN(n) ? "--" : n.toFixed(precision);
  } else if (typeof value === "number") {
    return value.toFixed(precision);
  } else {
    return "--";
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
