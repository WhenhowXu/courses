import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    themeKey: "light",
    themes: [
      { label: "白色", value: "light" },
      { label: "黑色", value: "dark" },
    ],
  },
  mutations: {
    setThemeKey(state, payload) {
      state.themeKey = payload;
      localStorage.setItem("theme", payload);
    },
  },
});
