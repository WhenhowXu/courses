// import { GET_LOGIN_ELEMENTS } from "@/api/constants";
// import { SuccessResponse } from "./response";
// import { getUrl } from "./utils";
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

Mock.mock(GET_MENUS_BUTTONS, "post", [
  {
    name: "Tables",
    icon: "table",
    path: "table",
    children: [
      {
        name: "带搜索表格",
        icon: "table",
        path: "/tables/searchTable",
        templatePath: "tables/searchTable",
      },
      {
        name: "表格2",
        icon: "table",
        path: "/tables/test02",
        templatePath: "tables/test2",
      },
    ],
  },
  {
    name: "Forms",
    icon: "form",
    path: "form",
    children: [
      {
        name: "表格1",
        icon: "table",
        path: "t1-01",
      },
    ],
  },
  {
    name: "VueDirectives",
    icon: "table",
    path: "vueDirectives",
    children: [
      { name: "防抖", path: "t1-01" },
      { name: "水印", path: "t1-01" },
    ],
  },
]);
