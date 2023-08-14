const MockJS = require("mockjs");
const { getResponse } = require("./response");
const {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_GET_USER_INFO,
} = require("../api/constants");

MockJS.mock(AUTH_LOGIN, "post", () => {
  return getResponse("kkk");
});
MockJS.mock(AUTH_LOGOUT, "post", () => {
  return getResponse();
});

MockJS.mock(AUTH_GET_USER_INFO, "post", () => {
  return getResponse({ username: "东门吹风", avatar: "" });
});
