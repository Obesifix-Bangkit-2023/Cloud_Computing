const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3001;

const helloRouter = require("./routes/hello.route");
const userRouter = require("./routes/user.route");
const predictionRouter = require("./routes/prediction.route");
const recomendationRouter = require("./routes/recomendation.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/temp", express.static(path.join(__dirname, "temp")));

app.use("/hello", helloRouter);
app.use("/user", userRouter);
app.use("/prediction", predictionRouter);
app.use("/recomendation", recomendationRouter);

app.use((err, req, res, next) => {
  if (err.code === "UNSUPPORTED_MEDIA_TYPE") {
    // Tangkap error fileFilter dan kirimkan respons kesalahan yang sesuai
    res.status(415).json({ error: "Format file tidak valid" });
  } else {
    // Tangani error lainnya
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
});

app.listen(port, () => {
  console.log(`Obesifix app listening on port ${port}`);
});
