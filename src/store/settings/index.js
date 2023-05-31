import { getLogionElements } from "@/api/plaform";
export default {
  namespaced: true,
  state: {
    loginElements: {},
    themeKey: "dark",
    themes: [
      { label: "白色", value: "light" },
      { label: "黑色", value: "dark" },
    ],
  },
  getters: {
    menuThemeKey(state) {
      return state.themeKey && /^dark/.test(state.themeKey) ? "dark" : "light";
    },
  },
  mutations: {
    setTemeKey(state, payload) {
      state.themeKey = payload;
    },
    setLoginElements(state, payload) {
      state.loginElements = payload;
    },
  },
  actions: {
    async updateLoginElements({ commit }) {
      const res = await getLogionElements();
      if (res.code === 0) {
        commit("setLoginElements", res.data);
      }
    },
  },
};
