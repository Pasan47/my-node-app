const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const app = express();
const port = 5000;
app.use("api/user");
router.post("/login", (req, res) => {
  const userName = req.body.userName;
  const user = { name: userName };
  const token = jwt.sign(user, "This is the user");
  res.send({ token });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
