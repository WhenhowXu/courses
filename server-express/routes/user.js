const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.route("/list").post(User.getUsers);
router.route("/create").post(User.createUser);
router.route("/delete").delete(User.deleteUser);
router.route("/update").post(User.updateUser);
router.route("/detail").get(User.getUserDetail);


module.exports = router;
