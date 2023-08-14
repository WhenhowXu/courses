const { INSERT_ROUTES } = require("@/router/constants");
const {  GET_MENUS_BUTTONS } = require("../api/constants");
const Mock = require("mockjs");

Mock.mock(GET_MENUS_BUTTONS, "post", INSERT_ROUTES);
