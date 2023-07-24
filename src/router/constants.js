export const INSERT_ROUTES = [
  {
    name: "Tree",
    icon: "share-alt",
    path: "tree",
    children: [
      {
        name: "Search Tree",
        path: "/tree/tree-search",
        templatePath: "tree/treeSearch",
      },
    ],
  },
  {
    name: "Table",
    icon: "table",
    path: "table",
    children: [
      {
        name: "Searchable Table",
        icon: "table",
        path: "/tables/searchTable",
        templatePath: "tables/searchTable",
      },
    ],
  },
  {
    name: "Form",
    icon: "form",
    path: "forms",
    children: [
      {
        name: "Rich Text Editor",
        path: "/forms/richText",
        templatePath: "forms/richText",
      },
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
    name: "Form Fields",
    icon: "form",
    path: "forms-fields",
    children: [
      {
        name: "Date Picker",
        path: "/form-fields/date-picker",
        templatePath: "formFields/datePicker",
      },
    ],
  },
];
