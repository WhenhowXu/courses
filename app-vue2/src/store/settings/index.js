export default {
  namespaced: true,
  state: {
    fold: false, // 侧标是否收起
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
    SET_FOLD(state, fold) {
      state.fold = fold;
    },
    setTemeKey(state, payload) {
      state.themeKey = payload;
    },
    setLoginElements(state, payload) {
      state.loginElements = payload;
    },
  },
  actions: {},
};
