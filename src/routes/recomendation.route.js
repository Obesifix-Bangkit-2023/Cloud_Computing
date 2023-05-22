const express = require("express");
const getFoodRecomendation = require("../controllers/recomendation.controlller");
const RecomendationRouter = express.Router();

RecomendationRouter.get("/:userId", getFoodRecomendation);

module.exports = RecomendationRouter;
