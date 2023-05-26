const database = require("../config/db");

const getFoodRecomendation = async (req, res) => {
  const userId = req.params.userId;
  let foodType = "";
  try {
    const query = `SELECT * FROM users WHERE user_id = '${userId}'`;
    const results = await database.runQuery(query);
    // console.log(results);
    foodType = results[0].food_type;
    // return res.json({ food_type: results[0].food_type });
  } catch (error) {
    // console.error(error);
  }
  console.log("ini => " + foodType);
  return res.json({ food_type: foodType });
};

module.exports = getFoodRecomendation;
