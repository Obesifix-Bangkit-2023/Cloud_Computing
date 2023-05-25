const express = require("express");
const {
  registerUser,
  loginUser,
  getUserById,
  editUserById,
} = require("../controllers/user.controller");
const decodeToken = require("../Middleware/decodeToken");

const UserRouter = express.Router();

UserRouter.post("/register", decodeToken, registerUser);
UserRouter.post("/login", decodeToken, loginUser);
UserRouter.get("/:userId", decodeToken, getUserById);
UserRouter.put("/:userId", decodeToken, editUserById);

module.exports = UserRouter;
