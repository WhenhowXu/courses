const sql = require("./db");

const User = function (user) {
  this.username = user.username;
  this.password = user.password;
};
User.getAll = (title, result) => {
  sql.query("SELECT * FROM tutorials", (err, res) => {
    if (err) {
      return result(null, err);
    }
    result(null, res);
  });
};

module.exports = User;
