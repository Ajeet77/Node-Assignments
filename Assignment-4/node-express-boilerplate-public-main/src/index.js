const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (num1 < 1000000 || num2 < 1000000) {
    res.status(400).json({
      status: "fail",
      message: "Underflow",
    });
  }
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(400).json({
      status: "error",
      message: "Input should be number",
    });
  } else {
    res.status(200).json({
      status: "Success",
      message: "the sum of given two numbers",
      sum: num1 + num2,
    });
  }
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(400).json({
      status: "error",
      message: "Input should be number",
    });
  } else {
    res.status(200).json({
      status: "Success",
      message: "the difference of given two numbers",
      sub: num1 - num2,
    });
  }
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(400).json({
      status: "error",
      message: "Input should be number",
    });
  } else {
    res.status(200).json({
      status: "Success",
      message: "The product of given numbers",
      multiply: num1 * num2,
    });
  }
});

app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(400).json({
      status: "error",
      message: "Input should be number",
    });
  }
  if (num2 === 0) {
    res.status(200).json({
      status: "Fail",
      message: "Cannot divide by zero",
    });
  } else {
    res.status(200).json({
      status: "Success",
      message: "The divide of given numbers",
      divide: num1 / num2,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
