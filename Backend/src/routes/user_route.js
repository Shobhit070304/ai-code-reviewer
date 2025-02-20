const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const user = await userModel.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists." });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return res
      .status(200)
      .json({ message: "User created successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    // Check if user exists or not
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not exists" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.cookie("token", token);
    return res
      .status(200)
      .json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
});

router.get("/profile", (req, res) => {
  // Verify JWT token
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Access denied" });
    }
    res.json({ user });
  });
});

module.exports = router;
