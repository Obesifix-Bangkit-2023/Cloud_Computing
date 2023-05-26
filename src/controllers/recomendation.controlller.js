const db = require("../config/db");

const getFoodRecomendation = async (req, res) => {
  const userId = req.params.userId;

  return res.json({ message: "Hello Recomendation " + req.params.userId });
};

module.exports = getFoodRecomendation;
