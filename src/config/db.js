require("dotenv").config();

const mysql = require("mysql");
const createConnection = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
};

//query
const runQuery = (query, data = null) => {
  return new Promise((resolve, reject) => {
    const connection = createConnection();
    if (data === null) {
      connection.query(query, (error, results) => {
        connection.end();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    } else {
      connection.query(query, [data], (error, results) => {
        connection.end();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
  });
};

module.exports = { runQuery, createConnection };
