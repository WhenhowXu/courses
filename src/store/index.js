import Vuex from "vuex";
import Vue from "vue";
import settings from "./settings";
import { getMenus } from "@/api/plaform";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
  },
  state: {
    isLogin: true,
    menus: [],
    buttons: [],
  },
  mutations: {},
  actions: {
    queryPermissions() {
      return new Promise((resolve) => {
        getMenus().then((res) => {
          resolve(res.data);
        });
      });
    },
  },
});
