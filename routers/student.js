const express = require("express");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const connectToDatabase = require("./db");
require("dotenv").config();
const router = express.Router();
let refreshTokens = [];
const userSchema = new mongoose.Schema({
  email: String,
  userName: String,
  password: String,
});

const user = mongoose.model("user", userSchema);

router.post("/login", async (req, res) => {
  const username = req.body.userName;
  const password = req.body.password;
  //console.log(userName);

  user.find({ userName: username }).then(() => {
    console.log("user found");
  });
  // console.log(existingUser.userName === username);
  // if (existingUser.userName === username) {
  //   if (existingUser.password === password) {
  //     const user = { name: username };

  //     const accessToken = jwt.sign(user, process.env.TOKEN_KEY, {
  //       expiresIn: "10s",
  //     });
  //     const refreshToken = jwt.sign(user, process.env.RE_TOKEN_KEY, {
  //       expiresIn: "24h",
  //     });
  //     console.log(accessToken);

  //     //refreshTokens.push(refreshToken);
  //     res.send({ accessToken, refreshToken });
  //     return { accessToken, refreshToken };
  //   }
  // }
});

router.post("/token", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);
  jwt.verify(refreshToken, process.env.RE_TOKEN_KEY, (err, user) => {
    if (err) res.sendStatus(403);
    const accessToken = jwt.sign({ name: user.name }, process.env.TOKEN_KEY, {
      expiresIn: "10s",
    });
    res.send({ accessToken });
  });
});

router.delete("/logout", (req, res) => {
  const refreshToken = req.body.refreshToken;
  refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
  res.sendStatus(204);
});

router.post("/signin", async (req, res) => {
  await connectToDatabase();
  console.log(req.body);

  const newUser = new user(req.body);
  newUser.save();
  res.json(newUser);
  return newUser;
});

module.exports = router;
