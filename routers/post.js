const express = require("express");
const connectToDatabase = require("./db");
const { mongoose } = require("mongoose");

const router = express.Router();
const app = express();

const postSchema = new mongoose.Schema({
  posttitle: { type: String, required: true },
  postcontent: String,
  url: String,
});

const Post = mongoose.model("post", postSchema);

router.post("/printMessage", async (req, res) => {
  console.log("pasan");
});

router.post("/addPost", async (req, res) => {
  try {
    console.log("hi");

    await connectToDatabase();
    const newPost = new Post(req.body);
    console.log(req.body);

    await newPost.save();
    res.send({ newPost });
  } catch (err) {
    console.error(err);
    throw error;
  }
});

router.get("/getAllPost", async (req, res) => {
  try {
    await connectToDatabase();
    Post.find().then((posts) => {
      res.json(posts);
      return posts;
    });
  } catch (err) {
    res.status(500).json({ error: "failed to retrieve attributes" });
  }

  //   const limit = parseInt(req.query.limit) || 10; // Default limit is 10
  //   const offset = parseInt(req.query.offset) || 0;

  //   const totalItems = await YourModel.countDocuments();
  //   const totalPages = Math.ceil(totalItems / limit);

  //   const resources = await YourModel.find().skip(offset).limit(limit);

  //   res.json({
  //     data: resources,
  //     totalItems,
  //     totalPages,
  //     currentPage: offset / limit + 1,
  //   });
});

router.get("/getPostById/:id", async (req, res) => {
  try {
    await connectToDatabase();
    console.log(req.params.id);

    Post.find({ _id: req.params.id }).then((posts) => {
      res.json(posts);
    });
  } catch (err) {
    res.status(500).json({ error: " failed to retrieved your desired post" });
  }
});

router.put("/editPost/:id", async (req, res) => {
  try {
    await connectToDatabase();
    console.log(JSON.stringify(req.body));
    console.log(req.params.id);

    const updatedResource = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(updatedResource);

    if (!updatedResource) {
      console.log("hi");
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(updatedResource);
  } catch (err) {
    console.log(err);

    res.status(400).json({
      error: err.message,
    });
  }
});

router.delete("/deletePost/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await connectToDatabase();

    const deletedResource = await Post.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json({ message: "Resource deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/getPostByParams", async (req, res) => {
  try {
    await connectToDatabase();
  } catch (err) {}
});

module.exports = router;
