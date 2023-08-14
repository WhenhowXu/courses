const express = require("express");
const router = express.Router();

const {
  login,
  getUserInfo,
  logout,
  getPermissions,
} = require("../controllers/auth");
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/getUserInfo").get(authMiddleware, getUserInfo);
router.route("/logout").post(logout);
router.route("/getPermissions").post(getPermissions);

module.exports = router;
