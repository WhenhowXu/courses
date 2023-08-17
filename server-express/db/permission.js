module.exports = [
  {
    name: "管理中心",
    icon: "setting",
    path: "manage-center",
    children: [
      {
        name: "用户管理",
        icon: "user",
        path: "/manage-center/user-manage",
        templatePath: "manageCenter/userManage",
      },
      {
        name: "菜单管理",
        icon: "menu",
        path: "/manage-center/menu-manage",
        templatePath: "manageCenter/menuManage",
      },
    ],
  },
];
