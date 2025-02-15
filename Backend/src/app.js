const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
const aiRouter = require("./routes/ai_route");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ai", aiRouter);

module.exports = app;
