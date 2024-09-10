// const mongoose = require("mongoose");
// const dbUrl =
//   "mongodb+srv://u01:XIzF9ybF3cgcrCvI@sltpractical.eyant.mongodb.net/PostDatabase?retrywrites=true&w=majority";
// const connectionParams = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// mongoose
//   .connect(dbUrl, connectionParams)
//   .then(() => {
//     console.log("connected to mongodb database");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://u03:YMmZFv2eNWwFv3Yf@sltpractical.eyant.mongodb.net/PostDatabase",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectToDatabase;
