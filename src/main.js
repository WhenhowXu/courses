import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import store from "@/store";
import router from "@/router";

Vue.use(Antd);
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
