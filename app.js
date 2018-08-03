const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const g90students = require("./routes/g90students")

app.use(bodyParser.json())
app.use("/g90students", g90students)

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;
