import { login, getUserInfo, logout } from "@/api/auth";
import { setToken, removeToken, getToken } from "@/utils/auth";

const getDefaultState = () => {
  return {
    token: getToken(),
    isLogin: false,
    userInfo: null,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
  actions: {
    login({ commit }, payload) {
      console.log(payload);
      const { username, password } = payload;
      return login({ username: username?.trim?.(), password }).then((res) => {
        setToken(res?.data);
        commit("SET_IS_LOGIN", true);
        commit("SET_TOKEN", res?.data);
      });
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            const { data } = res;
            if (!data) {
              reject("用户信息获取失败");
            } else {
              commit("SET_USER_INFO", data);
              resolve(data);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            removeToken();
            commit("RESET_STATE");
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
  },
};
