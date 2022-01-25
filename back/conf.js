const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: "",
  database: process.env.DATABASE,
});

module.exports = connection;
