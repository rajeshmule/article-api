var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

var v1Router = require("./routes/v1/index");

require("dotenv").config();

var app = express();

//connect mongodb
const mongodbURL =
  process.env.MONGODB_URI || "mongodb://localhost:27017/article-api";
mongoose.connect(
  mongodbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log(`mongodb connected to ${mongodbURL}`);
  }
);

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", v1Router);

module.exports = app;
