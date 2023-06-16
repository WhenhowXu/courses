const { INSERT_ROUTES } = require("@/router/constants");
const { GET_LOGIN_ELEMENTS, GET_MENUS_BUTTONS } = require("../api/constants");
const Mock = require("mockjs");

Mock.mock(GET_LOGIN_ELEMENTS, "get", {
  // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
  "list|1-5": [
    {
      // 属性 sid 是一个自增数，起始值为 1，每次增 1
      "sid|+1": 1,
      // 属性 userId 是一个5位的随机码
      "userId|5": "",
    },
  ],
});

Mock.mock(GET_MENUS_BUTTONS, "post", INSERT_ROUTES);
