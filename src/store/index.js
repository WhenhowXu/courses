import Vuex from "vuex";
import Vue from "vue";
import settings from "./settings";
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
  },
  state: {
    isLogin: true,
    menus: [],
    menusMap: {},
    buttons: [],
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
        getMenus().then((res) => {
          commit("setPermissions", { menus: res.data });
          resolve(res.data);
        });
      });
    },
  },
});
