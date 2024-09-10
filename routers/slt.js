const connectToDatabase = require("./db");
const { mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  posttitle: String,
  postcontent: String,
  url: String,
});

const Post = mongoose.model("post", postSchema);
async function savePost() {
  await connectToDatabase();
  const newPost = new Post({
    posttitle: "election",
    postcontent: "it is on 21st",
    url: "sdsd",
  });
  await newPost.save();
}
savePost();
