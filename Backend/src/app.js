const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const aiRouter = require("./routes/ai_route");
const userRouter = require("./routes/user_route");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/ai-code-reviewer")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log(" failed to connect to MongoDB "));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ai", aiRouter);
app.use("/user", userRouter);

module.exports = app;
