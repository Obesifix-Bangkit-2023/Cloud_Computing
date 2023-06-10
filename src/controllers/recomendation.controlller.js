const database = require("../config/db");
const dictToArray = require("../helper/dictToArray");
const axios = require("axios");
require("dotenv").config();

const nutritionClassiification = (data) => {
  let status = "";
  if (data < 18.5) {
    status = "underweight";
  } else if (data >= 18.5 && data <= 24.9) {
    status = "normal";
  } else if (data >= 25 && data <= 29.9) {
    status = "overweight";
  } else if (data >= 30) {
    status = "obese";
  }

  return status;
};

const getFoodRecomendation = async (req, res) => {
  const userId = req.params.userId;
  let data_user = "";
  try {
    const query = `SELECT * FROM users WHERE user_id = '${userId}'`;
    const results = await database.runQuery(query);
    data_user = results[0];
  } catch (error) {
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message,
    });
  }
  const weight = data_user.weight;
  const height = data_user.height;
  const height_in_m = height / 100;

  const nutritionValue = weight / (height_in_m * height_in_m);
  const formatedNutrition = nutritionValue.toFixed(1);
  const parsedNutrition = parseFloat(formatedNutrition);

  const nutritionStatus = nutritionClassiification(parsedNutrition);
  const foodType = data_user.food_type;

  const dataRecomendation = {
    nutrition_status: nutritionStatus,
    food_type: foodType,
  };
  // console.log(dataRecomendation);
  const mlUrl = process.env.ML_URL;
  try {
    const response = await axios.post(
      `${mlUrl}/recomendation`,
      dataRecomendation
    );
    const responseData = response.data.food_list;
    //ubah ke array
    const result = dictToArray(responseData);
    // console.log("Result:", responseData);
    return res
      .status(200)
      .send({ status: true, statusCode: 200, food_list: result });
  } catch (error) {
    console.error("Error send to ML:", error);
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: error.message });
  }
};

module.exports = getFoodRecomendation;
