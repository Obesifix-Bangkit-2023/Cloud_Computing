const express = require("express");
const predictFood = require("../controllers/prediction.controller");
const decodeToken = require("../Middleware/decodeToken");
const multer = require("multer");
const path = require("path");
const PredictionRouter = express.Router();

const dummyPrediction = require("../dummyResponse/prediction.dummy");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    const error = new Error("Format file tidak valid");
    error.code = "UNSUPPORTED_MEDIA_TYPE";
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

//endpoint asli
PredictionRouter.post("/", decodeToken, upload.single("image"), predictFood);

// //dummy endpoint
// PredictionRouter.post("/", dummyPrediction);

module.exports = PredictionRouter;
