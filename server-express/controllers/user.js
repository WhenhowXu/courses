const asyncWrapper = require("../middleware/async");
const UserModel = require("../models/userModel");

const getAllUsers = asyncWrapper(async (req, res) => {
  UserModel.getAll({}, (err, data) => {
    if (err) {
      res.send({ code: -1, message: err.message || "" });
    } else {
      res.send({ code: 0, message: "success", data });
    }
  });
});

module.exports = {
  getAllUsers,
};
