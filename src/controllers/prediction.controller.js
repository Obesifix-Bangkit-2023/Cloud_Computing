const FormData = require("form-data");
const axios = require("axios");
const { unlink } = require("fs/promises");

const deleteFile = async (url) => {
  await unlink(url);
  // return `Success deleted: ${url}`;
};

const predictFood = async (req, res) => {
  // if (err.code === "UNSUPPORTED_MEDIA_TYPE") {
  //   // Tangkap error fileFilter dan kirimkan respons kesalahan yang sesuai
  //   res.status(415).json({ error: "Format file tidak valid" });
  // }
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

  const mlUrl = process.env.ML_PREDICTION_URL;
  try {
    const response = await axios.post(`${mlUrl}/recomendation`, dataImage);
    const responseData = response.data;
    // console.log("Response:", responseData);
    // Menyimpan respons ke dalam variabel lain
    const result = responseData.result;
    // console.log("Result:", result);
    await deleteFile(req.file.path);
    return res
      .status(200)
      .send({ status: true, statusCode: 200, food_data: result });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: error.message });
  }
};

module.exports = predictFood;
