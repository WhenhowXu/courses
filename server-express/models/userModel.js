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

User.update = (newUser, result) => {
  sql.query(
    "UPDATE users SET username = ?, update_time = ? WHERE user_id = ?",
    [newUser.username, new Date(), newUser.user_id],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.affectedRows === 0) {
        result(new Error("用户不存在"));
        return;
      }
      console.log("更新用户成功：", { userId: res.userId, ...newUser });
      result(null, { userId: res.userId, ...newUser });
    }
  );
};

User.delete = (userId, result) => {
  sql.query("DELETE FROM users WHERE user_id = ? ", userId, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    console.log("删除用户成功：", userId);
    result(null, res);
  });
};

module.exports = User;
