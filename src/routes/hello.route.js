const express = require("express");

const HelloServerRouter = express.Router();

HelloServerRouter.get("/", (req, res) => {
  res.status(200).send({ message: "Hello Server" });
});

module.exports = HelloServerRouter;
