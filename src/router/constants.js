export const INSERT_ROUTES = [
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
        name: "大数据表格",
        icon: "table",
        path: "/tables/test02",
        templatePath: "tables/test2",
      },
    ],
  },
  {
    name: "Forms",
    icon: "form",
    path: "forms",
    children: [
      {
        name: "动态增减表单",
        path: "/forms/dymicForm",
        templatePath: "forms/dymicForm",
      },
    ],
  },
];
