const axios = require("axios");
const uploadImage = require("../helper/uploadImage");
const { unlink } = require("fs/promises");

const getUrlImage = async (data) => {
  try {
    const myFile = data;
    // console.log(myFile);
    const imageURL = await uploadImage(myFile);
    return imageURL;
  } catch (error) {
    console.error("Error:", error);
    return error.message;
  }
};

const predictFood = async (req, res) => {
  if (!req.file) {
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: "image required" });
  }

  const imageURL = await getUrlImage(req.file);

  const dataImage = {
    image_url: imageURL,
  };

  const mlUrl = process.env.ML_URL;
  try {
    const response = await axios.post(`${mlUrl}/prediction`, dataImage);
    const responseData = await response.data.food_data;
    return res
      .status(200)
      .send({ status: true, statusCode: 200, food_data: responseData });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: error.message });
  }
};

module.exports = predictFood;
