const express = require("express");
const getFoodRecomendation = require("../controllers/recomendation.controlller");
const RecomendationRouter = express.Router();
const decodeToken = require("../Middleware/decodeToken");

const dummyRecomendation = require("../dummyResponse/recomendation.dummy");

//endpoint asli
// RecomendationRouter.get("/:userId", decodeToken, getFoodRecomendation);

//endpoint dummy
RecomendationRouter.get("/:userId", dummyRecomendation);

module.exports = RecomendationRouter;
