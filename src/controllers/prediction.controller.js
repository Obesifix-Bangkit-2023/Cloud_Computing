const axios = require("axios");
const { unlink } = require("fs/promises");

const deleteFile = async (url) => {
  await unlink(url);
};

const predictFood = async (req, res) => {
  if (!req.file) {
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: "image required" });
  }
  const imageURL =
    req.protocol + "://" + req.get("host") + "/temp/" + req.file.filename;

  const dataImage = {
    image_url: imageURL,
  };

  const mlUrl = process.env.ML_URL;
  try {
    const response = await axios.post(`${mlUrl}/prediction`, dataImage);
    const responseData = response.data.food_data;
    await deleteFile(req.file.path);
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
