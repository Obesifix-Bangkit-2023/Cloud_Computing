const getFoodRecomendation = (req, res) => {
  return res.json({ message: "Hello Recomendation " + req.params.userId });
};

module.exports = getFoodRecomendation;
