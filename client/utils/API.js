// front end axios calls

import axios from "axios";

export default {
  // Gets all posts, like scraper
  getAllPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id. This will be a 2.0 feature. Don't want to give all users delete post privileges
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database using react form data
  savePost: function(postData) {
    return axios.post("/api/posts", formData);
  }
};
