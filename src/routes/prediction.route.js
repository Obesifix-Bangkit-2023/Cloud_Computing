const express = require("express");
const predictFood = require("../controllers/prediction.controller");
const decodeToken = require("../Middleware/decodeToken");

const PredictionRouter = express.Router();

PredictionRouter.post("/", decodeToken, predictFood);

module.exports = PredictionRouter;
