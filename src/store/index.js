import Vuex from "vuex";
import Vue from "vue";
import settings from "./settings";
import auth from "./auth";
import { getMenus } from "@/api/plaform";

function getMenusMap(menus) {
  const obj = {};
  function storeMenuMap(menus, storeObj, parentPath) {
    if (menus?.length) {
      menus.forEach((v) => {
        v.parentPath = parentPath;
        storeObj[v.path] = v;
        if (v.children?.length) {
          storeMenuMap(v.children, storeObj, v.path);
        }
      });
    }
  }
  storeMenuMap(menus, obj);
  return obj;
}
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
    auth,
  },
  state: {
    menus: [],
    menusMap: {},
    buttons: [],
  },
  getters: {
    isLogin: (state) => state.auth.isLogin,
  },
  mutations: {
    setPermissions(state, data) {
      state.menus = data?.menus || [];
      state.menusMap = getMenusMap(data?.menus || []);
      state.buttons = data?.buttons || [];
    },
  },
  actions: {
    queryPermissions({ commit }) {
      return new Promise((resolve) => {
        getMenus().then((data) => {
          console.log(data, "----------------");
          commit("setPermissions", { menus: data });
          resolve(data);
        });
      });
    },
  },
});
