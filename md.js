const express = require("express");
const app = express();
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "john_doe", { maxAge: 900000 }); // Set a cookie named 'username'

  res.send("Cookie set");
});
