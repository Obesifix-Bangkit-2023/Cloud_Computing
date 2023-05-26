const database = require("../config/db");
const {
  registerUserValidation,
  updateUserValidation,
} = require("../validations/user.validation");

//RESGISTRASI USER
const registerUser = async (req, res) => {
  const { name, picture, email, user_id } = req.user;
  const { age, gender, height, weight, activity, food_type } = req.body;

  const created_at = new Date().toISOString();
  const updated_at = created_at;

  const data = {
    user_id,
    name,
    email,
    picture,
    age,
    gender,
    height,
    weight,
    activity,
    food_type,
    created_at,
    updated_at,
  };

  const { error, value } = registerUserValidation(data);

  if (error) {
    const errorMessage = error.details[0].message;
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: errorMessage });
  }
  const sql = `INSERT INTO users (user_id, name, email, picture, age, gender, height, weight, activity, food_type, created_at, updated_at) VALUES ("${user_id}","${name}", "${email}", "${picture}", "${age}", "${gender}", "${height}", "${weight}", "${activity}", "${food_type}", "${created_at}", "${updated_at}")`;
  try {
    const results = await database.runQuery(sql);
    // console.log(results);
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: "success register",
      userId: user_id,
    });
  } catch (error) {
    // console.error(error);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message,
    });
  }
};

//LOGIN USER
const loginUser = async (req, res) => {
  const userId = req.user.user_id;
  const sql = `SELECT COUNT(*) FROM users WHERE user_id = '${userId}'`;
  let count = 0;
  try {
    const results = await database.runQuery(sql);
    count = Object.values(results[0])[0];
    if (count === 1) {
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: "Success login",
        user_id: userId,
      });
    } else {
      return res.status(422).send({
        status: false,
        statusCode: 422,
        message: "Not logged",
      });
    }
    console.log(count);
  } catch (error) {
    // console.error(error);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message,
    });
  }
};

//GET USER BY ID
const getUserById = async (req, res) => {
  const userId = req.params.userId;
  const sql = `SELECT * FROM users WHERE user_id = '${userId}'`;
  try {
    const results = await database.runQuery(sql);
    // console.log(results);
    if (results.length === 0) {
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: "User Not Found",
      });
    } else {
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: "Success getDAta",
        data: results[0],
      });
    }
  } catch (error) {
    // console.error(error);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message,
    });
  }
};

//EDIT USER
const editUserById = async (req, res) => {
  const userId = req.params.userId;

  req.body.updated_at = new Date().toISOString();

  const { error, value } = updateUserValidation(req.body);

  if (error) {
    const errorMessage = error.details[0].message;
    return res
      .status(422)
      .send({ status: false, statusCode: 422, message: errorMessage });
  }

  const sql2 = `UPDATE users SET ? WHERE user_id = '${userId}'`;
  try {
    const results = await database.runQuery(sql2, value);
    // console.log(results);
    if (results.affectedRows === 0) {
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: "User Not Found",
      });
    } else {
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: "Success update Data",
      });
    }
  } catch (error) {
    // console.error(error);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message,
    });
  }
};

module.exports = { registerUser, loginUser, getUserById, editUserById };
