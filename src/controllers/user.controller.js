const db = require("../config/db");
const {
  registerUserValidation,
  updateUserValidation,
} = require("../validations/user.validation");

//RESGISTRASI USER
const registerUser = (req, res) => {
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

  try {
    const sql = `INSERT INTO users (user_id, name, email, picture, age, gender, height, weight, activity, food_type, created_at, updated_at) VALUES ("${user_id}","${name}", "${email}", "${picture}", "${age}", "${gender}", "${height}", "${weight}", "${activity}", "${food_type}", "${created_at}", "${updated_at}")`;
    db.query(sql, (err, result) => {
      if (err) {
        // console.log("error register to DB");
        return res.status(201).send({
          status: false,
          statusCode: 422,
          message: err.message,
        });
      }
      // console.log("Number of records inserted: " + result.affectedRows);
      return res.status(201).send({
        status: true,
        statusCode: 201,
        message: "Success Register",
        data: value,
      });
    });
  } catch (err) {
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err.message,
    });
  }
};

//LOGIN USER
const loginUser = (req, res) => {
  const userId = req.user.user_id;
  const sql = "SELECT COUNT(*) FROM users WHERE user_id = ?";
  let count = 0;
  try {
    db.query(sql, [userId], function (err, result) {
      if (err) {
        return res.status(201).send({
          status: false,
          statusCode: 422,
          message: err.message,
        });
      }
      // console.log(result);
      count = Object.values(result[0])[0];
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
    });
  } catch (err) {
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err.message,
    });
  }
};

//GET USER BY ID
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const sql = "SELECT * FROM users WHERE user_id = ?";
  try {
    db.query(sql, [userId], function (err, result) {
      if (err) {
        return res.status(422).send({
          status: false,
          statusCode: 422,
          message: err.message,
        });
      }
      if (result.length === 0) {
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
          data: result[0],
        });
      }
    });
  } catch (err) {
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err.message,
    });
  }
};

const bufferGetData = (req, res) => {};

//EDIT USER
const editUserById = (req, res) => {
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
    db.query(sql2, [value], function (err, result) {
      if (err) {
        return res.status(422).send({
          status: false,
          statusCode: 422,
          message: err.message,
        });
      } else {
        if (result.affectedRows === 0) {
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
      }
    });
  } catch (err) {
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: err.message,
    });
  }
};

module.exports = { registerUser, loginUser, getUserById, editUserById };
