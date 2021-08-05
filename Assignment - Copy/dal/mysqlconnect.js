const { query } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "iacsdedacmay21",
  
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected");
  }
});

module.exports = connection;
