export const INSERT_ROUTES = [
  {
    name: "Forms",
    icon: "form",
    path: "forms",
    children: [
      {
        name: "自定义表单",
        path: "/forms/haoFields",
        templatePath: "forms/haoFields",
      },
      {
        name: "动态增减表单",
        path: "/forms/dymicForm",
        templatePath: "forms/dymicForm",
      },
      {
        name: "表格中的表单",
        path: "/forms/formInTable",
        templatePath: "forms/formInTable",
      },
    ],
  },
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
];
