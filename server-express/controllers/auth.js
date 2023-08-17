const jwt = require("jsonwebtoken");
const { ErrorRes, SuccessRes } = require("../response");
const users = require("../db/user.json");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json(ErrorRes("用户名或密码不能为空"));
  }
  const user = users.find(
    (v) => v.username === username && v.password === password
  );
  if (!user) {
    res.json(ErrorRes("用户名或密码错误"));
  }
  const id = new Date().getTime();
  const token = jwt.sign({ id, username }, "HAO_123333", {
    expiresIn: "30d",
  });
  res.json(SuccessRes(token));
};

const getUserInfo = async (req, res) => {
  const user = { username: "张三" };
  res.json(SuccessRes(user));
};

const logout = async (req, res) => {
  res.json(SuccessRes);
};

const INSERT_ROUTES = require("../db/permission");
const getPermissions = async (req, res) => {
  res.json(SuccessRes(INSERT_ROUTES));
};

module.exports = {
  login,
  getUserInfo,
  logout,
  getPermissions,
};
