const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());
const aiRouter = require("./routes/ai_route");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ai", aiRouter);

module.exports = app;
