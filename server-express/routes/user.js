const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.route("/").get(User.getAllUsers);

module.exports = router;
