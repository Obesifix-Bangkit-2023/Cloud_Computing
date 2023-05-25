const express = require("express");
const getFoodRecomendation = require("../controllers/recomendation.controlller");
const RecomendationRouter = express.Router();
const decodeToken = require("../Middleware/decodeToken");

RecomendationRouter.get("/:userId", decodeToken, getFoodRecomendation);

module.exports = RecomendationRouter;
