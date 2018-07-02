const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  tag: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, default: Date.now },
  stars: {type: Number, required: true},
  postId: { type: Number, required: true}
  
});

const Post = mongoose.model("Post", postSchema);

module.exports = Book;
