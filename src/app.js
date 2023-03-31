var createError = require("http-errors");
var express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

const db_path = path.join(__dirname, "./db/db");
const db = require(db_path);

var indexRouter = require("./controller/index");
var categoryRouter = require("./controller/category");
var productsRouter = require("./controller/products");

// view engine setup

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/", categoryRouter);
app.use("/", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
