const dummyPrediction = (req, res) => {
  //buat raw data jumlah nutrisi harus dikali dulu dengan serving untuk mengubahnya ke gram per sekian serving, contoh  200g apel = 200*0.52 cal/g ya begitu juga untuk nutrisi lainnya
  const dataRes = {
    name: "hotDog",
    serving: 50,
    calories: 2.902,
    fat: 0.255,
    carbohydrate: 0.042,
    protein: 0.098,
    description:
      "An omelet is a dish you might order for breakfast or brunch — it's kind of like a folded pancake made of beaten eggs, sometimes with the addition of fillings. It is quite common it to have fillings such as chives, vegetables, mushrooms, meat (often ham or bacon), cheese, onions or some combination of the above An omelet is a dish you might order for breakfast or brunch it's kind of like a folded pancake made of beaten eggs, sometimes with the addition of fillings. It s fillings can be varied, such as chives, vegetables, mushrooms, meat (often ham or bacon), cheese, onions or some combination of the above",
  };

  const data = {
    name: dataRes.name,
    serving: dataRes.serving,
    calorie: dataRes.calories * dataRes.serving,
    fat: dataRes.fat * dataRes.serving,
    protein: dataRes.protein * dataRes.serving,
    carbohydrate: dataRes.carbohydrate * dataRes.serving,
    description: dataRes.description,
  };

  return res
    .status(200)
    .send({ status: true, statusCode: 200, food_data: data });
};

module.exports = dummyPrediction;
