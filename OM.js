const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  authors:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: authorSchema
  }]
});

const authorSchema = new mongoose.Schema({
  name: String,
});

const bookAuthorSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const Book = mongoose.model("Book", bookSchema);
const Author = mongoose.model("Author", authorSchema);
const BookAuthor = mongoose.model("BookAuthor", bookAuthorSchema);

// const mongoose = require("mongoose");

// const bookSchema = new mongoose.Schema({
//   title: String,
//   authorIds: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Author",
//     },
//   ],
// });

// const authorSchema = new mongoose.Schema({
//   name: String,
// });

// const Book = mongoose.model("Book", bookSchema);
// const Author = mongoose.model("Author", authorSchema);
