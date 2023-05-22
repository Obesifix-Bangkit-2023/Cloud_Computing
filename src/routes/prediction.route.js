const express = require("express");
const predictFood = require("../controllers/prediction.controller");

const PredictionRouter = express.Router();

PredictionRouter.post("/", predictFood);

module.exports = PredictionRouter;
