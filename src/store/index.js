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
  mutations: {
    setPermissions(state, data) {
      state.menus = data?.menus || [];
      state.buttons = data?.buttons || [];
    },
  },
  actions: {
    queryPermissions({ commit }) {
      return new Promise((resolve) => {
        getMenus().then((res) => {
          commit("setPermissions", { menus: res.data });
          resolve(res.data);
        });
      });
    },
  },
});
