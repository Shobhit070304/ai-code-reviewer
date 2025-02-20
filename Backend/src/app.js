const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const aiRouter = require("./routes/ai_route");
const userRouter = require("./routes/user_route");

app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/ai-code-reviewer")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log(" failed to connect to MongoDB "));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ai", aiRouter);
app.use("/user", userRouter);

module.exports = app;
