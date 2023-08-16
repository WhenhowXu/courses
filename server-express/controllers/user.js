const UserModel = require("../models/userModel");

const getUsers = (req, res) => {
  UserModel.getAll(req.body, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "服务异常" });
    } else {
      res.send({ code: 0, data, message: "success" });
    }
  });
};

const createUser = (req, res) => {
  UserModel.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "服务异常" });
    } else {
      res.send({ code: 0, data, message: "success" });
    }
  });
};

const deleteUser = (req, res) => {
  UserModel.delete(req.query.userId, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "服务异常" });
    } else {
      res.send({ code: 0, data, message: "success" });
    }
  });
};

const updateUser = (req, res) => {
  UserModel.update(req.body, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "服务异常" });
    } else {
      res.send({ code: 0, data, message: "success" });
    }
  });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
