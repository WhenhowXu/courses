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
        name: "Custom Form Fields",
        path: "/forms/custom-form-fields",
        templatePath: "forms/customFormFields",
      },
      {
        name: "Dynamic Form",
        path: "/forms/dynamic-form",
        templatePath: "forms/dynamicForm",
      },
      {
        name: "Form In Table",
        path: "/forms/form-in-table",
        templatePath: "forms/formInTable",
      },
    ],
  },
];
