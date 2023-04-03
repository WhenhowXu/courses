export default {
    namespaced: true,
    state: {
        themeKey: 'dark',
        themes: [
            { label: "白色", value: "light" },
            { label: "黑色", value: "dark" },
        ],
    },
    getters: {
        menuThemeKey(state) {
            return state.themeKey && /^dark/.test(state.themeKey) ? 'dark' : 'light'
        }
    },
    mutations: {
        setTemeKey(state, payload){
            state.themeKey = payload
        }
    },
    actions: {},
}