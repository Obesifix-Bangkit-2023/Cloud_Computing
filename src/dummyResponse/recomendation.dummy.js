const dummyRecomendation = (req, res) => {
  //calorie masih dalam bentu g harus diubah ke kcal
  const arrFood = [
    {
      name: "food name",
      image: "https://placeimg.com/640/480/animals",
      calorie: 2560.7,
      fat: 74.3,
      carbohydrate: 418.5,
      protein: 69.4,
      keyword: "Breads, Healthy, Brunch, < 60 Mins",
      food_category: "Bread",
    },
    {
      name: "food name",
      image: "https://placeimg.com/640/480/animals",
      calorie: 2560.7,
      fat: 74.3,
      carbohydrate: 418.5,
      protein: 69.4,
      keyword: "Breads, Healthy, Brunch, < 60 Mins",
      food_category: "Bread",
    },
    {
      name: "food name",
      image: "https://placeimg.com/640/480/animals",
      calorie: 2560.7,
      fat: 74.3,
      carbohydrate: 418.5,
      protein: 69.4,
      keyword: "Breads, Healthy, Brunch, < 60 Mins",
      food_category: "Bread",
    },
    {
      name: "food name",
      image: "https://placeimg.com/640/480/animals",
      calorie: 2560.7,
      fat: 74.3,
      carbohydrate: 418.5,
      protein: 69.4,
      keyword: "Breads, Healthy, Brunch, < 60 Mins",
      food_category: "Bread",
    },
    {
      name: "food name",
      image: "https://placeimg.com/640/480/animals",
      calorie: 2560.7,
      fat: 74.3,
      carbohydrate: 418.5,
      protein: 69.4,
      keyword: "Breads, Healthy, Brunch, < 60 Mins",
      food_category: "Bread",
    },
    {
      name: "food name",
      image: "https://placeimg.com/640/480/animals",
      calorie: 2560.7,
      fat: 74.3,
      carbohydrate: 418.5,
      protein: 69.4,
      keyword: "Breads, Healthy, Brunch, < 60 Mins",
      food_category: "Bread",
    },
  ];

  return res
    .status(200)
    .send({ status: true, statusCode: 200, food_list: arrFood });
};

module.exports = dummyRecomendation;
