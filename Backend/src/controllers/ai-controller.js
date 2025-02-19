const generateContent = require("../services/ai.service");

module.exports.getReview = async function (req, res) {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("Please provide a prompt");
  }
  const result = await generateContent(code);
  res.send(result);
};
