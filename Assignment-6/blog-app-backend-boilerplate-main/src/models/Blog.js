const mongooose = require("mongoose");

const blogSchema = new mongooose.Schema(
  {
    // Your code goes here
    id :{
      type: Number
    },
    topic: {
      type: String,
      max: 50,
    },
    description: {
      type: String,
      max: 100,
    },
    posted_At: {
      type: String,
    },
    posted_By: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongooose.model("blogs", blogSchema);

module.exports = Blog;
