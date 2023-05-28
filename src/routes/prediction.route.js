const express = require("express");
const predictFood = require("../controllers/prediction.controller");
const decodeToken = require("../Middleware/decodeToken");
const multer = require("multer");
const path = require("path");

const PredictionRouter = express.Router();

const url = path.join(__dirname, "../temp");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, url);
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    const error = new Error("Format file tidak valid");
    error.code = "UNSUPPORTED_MEDIA_TYPE";
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

console.log(url);
PredictionRouter.post("/", decodeToken, upload.single("image"), predictFood);

module.exports = PredictionRouter;
