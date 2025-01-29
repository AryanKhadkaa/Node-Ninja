const Blog = require("../models/blogs");

const blog_showBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //filtering by created date and -1 indicated descending order
    .then((result) => {
      console.log(result);
      res.render("blogs", { title: "Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body); //we create a new instance of our collection and the incoming data from the middleware is now sent to the DB
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
  res.render("createBlogs", { title: "Create new blog" });
};

const blog_details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_showBlogs,
  blog_create_post,
  blog_details,
  blog_create_get,
  blog_delete,
};
