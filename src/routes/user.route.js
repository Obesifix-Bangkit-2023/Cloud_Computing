const express = require("express");
const {
  registerUser,
  loginUser,
  getUserById,
  editUserById,
} = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/:userId", getUserById);
UserRouter.put("/:userId", editUserById);

module.exports = UserRouter;
