const sql = require("./db");

const User = function (user) {
  this.username = user.username;
  this.password = user.password;
  this.depend = user.depend;
  this.avatar = user.avatar;
};

User.getAll = (data, result) => {
  const { size = 10, page = 1 } = data;
  console.log(page, size);
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      return result(null, err);
    }
    result(null, { data: res, page, size, total: 100 });
  });
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    console.log("新增用户成功：", { userId: res.userId, ...newUser });
    result(null, { userId: res.userId, ...newUser });
  });
};

module.exports = User;
