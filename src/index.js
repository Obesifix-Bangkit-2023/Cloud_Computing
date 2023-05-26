const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

const helloRouter = require("./routes/hello.route");
const userRouter = require("./routes/user.route");
const predictionRouter = require("./routes/prediction.route");
const recomendationRouter = require("./routes/recomendation.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/hello", helloRouter);
app.use("/user", userRouter);
app.use("/prediction", predictionRouter);
app.use("/recomendation", recomendationRouter);

app.listen(port, () => {
  console.log(`Obesifix app listening on port ${port}`);
});
