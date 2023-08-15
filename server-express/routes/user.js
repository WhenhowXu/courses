const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.route("/list").post(User.getUsers);

module.exports = router;
