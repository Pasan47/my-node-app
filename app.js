const express = require("express");
const student = require("./routers/student");
const cors = require("cors");
const user = require("./routers/user");
const test = require("./routers/test");
const post = require("./routers/post");
const app = express();
console.log("hello");
app.use(cors());
app.use(express.json());
console.log("world");

//app.use("api/user", user);
app.use("/api/auth", student);
app.use("/api/post", post);
app.use("/api/test", log, test);

function log(req, res, next) {
  req.id = 10;
  console.log("hello log");
  next();
}

function newMiddlware(req, res, next) {
  console.log("hello world slt");
  console.log(process.argv);
  console.log(process.env);

  req.id = 100;
  //res.send("you are authenticated");
  //console.log(res);

  next();
}

console.log("pasan");

const port = 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
