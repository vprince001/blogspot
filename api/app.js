const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b25c43c88726ef",
  password: "568c0852",
  database: "heroku_16e6f588fb48172"
});

connection.connect();

const addUser = function(req, res) {
  console.log("req", req.body);

  const userDetails = JSON.parse(req.body);
  const { username, password } = userDetails;
  const query = `INSERT INTO users(username, password) VALUES ("${username}", "${password}")`;
  connection.query(query, (err, result) => {
    res.send(result);
  });
};

const logger = (req, res, next) => {
  console.log(req.url);
  next();
};

app.use(logger);
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./client", { extensions: ["html"] }));
app.post("/addUser", addUser);

module.exports = { app };
