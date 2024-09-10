const express = require("express");
const router = express.Router();

router.get("/test1", (req, res) => {
  res.send({ image: req.id });
});

module.exports = router;
