const UserModel = require("../models/userModel");
const { ErrorRes, SuccessRes } = require("../response");

const getUsers = (req, res) => {
  UserModel.getAll(req.body, (err, data) => {
    res.send(err ? ErrorRes(err.message) : SuccessRes(data));
  });
};

const createUser = (req, res) => {
  UserModel.create(req.body, (err, data) => {
    res.send(err ? ErrorRes(err.message) : SuccessRes(data));
  });
};

const deleteUser = (req, res) => {
  UserModel.delete(req.query.userId, (err, data) => {
    res.send(err ? ErrorRes(err.message) : SuccessRes(data));
  });
};

const updateUser = (req, res) => {
  UserModel.update(req.body, (err, data) => {
    res.send(err ? ErrorRes(err.message) : SuccessRes(data));
  });
};

const getUserDetail = (req, res) => {
  UserModel.findById(req.query.userId, (err, data) => {
    res.send(err ? ErrorRes(err.message) : SuccessRes(data));
  });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserDetail,
};
