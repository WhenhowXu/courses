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
    name: "表格",
    icon: "table",
    path: "table",
    children: [
      {
        name: "表格滚动",
        icon: "table",
        path: "/tables/scrollTable",
        templatePath: "tables/scrollTable",
      },
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
    name: "ThreeJS",
    icon: "reconciliation",
    path: "three-js",
    children: [
      {
        name: "简单示例",
        path: "/three/test-demo",
        templatePath: "three/threeTestDemo",
      },
    ],
  },
  {
    name: "表单",
    icon: "form",
    path: "forms",
    children: [
      {
        name: "富文本编辑",
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
    name: "Vue Apis",
    icon: "book",
    path: "vue-demos",
    children: [
      {
        name: "生命周期",
        path: "/vue-demos/lifeCycle",
        templatePath: "vueDemos/lifeCycle",
      },
      {
        name: "directives",
        path: "/vue-demos/directives",
        templatePath: "vueDemos/directives",
      },
      {
        name: "slot",
        path: "/vue-demos/slot",
        templatePath: "vueDemos/slotDemo",
      },
      {
        name: "provide inject",
        path: "/vue-demos/provide-inject",
        templatePath: "vueDemos/provideInject",
      },
      {
        name: "filter",
        path: "/vue-demos/filter",
        templatePath: "vueDemos/filterDemo",
      },
    ],
  },
];
