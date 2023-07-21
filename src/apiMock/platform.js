const { INSERT_ROUTES } = require("@/router/constants");
const { GET_LOGIN_ELEMENTS, GET_MENUS_BUTTONS } = require("../api/constants");
const Mock = require("mockjs");

Mock.mock(GET_LOGIN_ELEMENTS, "get", {
  "list|1-5": [
    {
      "sid|+1": 1,
      "userId|5": "",
    },
  ],
});

Mock.mock(GET_MENUS_BUTTONS, "post", INSERT_ROUTES);
