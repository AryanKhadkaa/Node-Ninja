const express = require("express");
//const Blog = require('../models/blogs') // Commenting, for lessong 9: as we're creating a separate blog controller for the logic, we wont be needing this here
const router = express.Router();
const blogController = require("../controllers/blogControllers"); // From lesson 9
//blog routes

//eg route
//   router.get('/add-blogs',(req,res)=>{

//     console.log(req.url)
//        const blog = new Blog({
//         title:'new blogss',
//         snippet:'new blogs',
//         body:'new blog',
//        })
//        blog.save()  // this is an  asynchrounous task, it takes some time and returns a promise
//        .then((result)=>{ // so we use a then method, which will fire a callback fucntion when this promise resolves (fulfills)
//         console.log('yes')
//         res.send(result)
//        })
//        .catch((err)=>{ // catch method for errors
//         console.log(err)
//        })
//   })

// to retrieve data and display  (we can also filter data)

//  router.get('/',(req,res)=>{
//   Blog.find().sort({createdAt: -1}) //filtering by created date and -1 indicated descending order
//   .then((result)=>{
//     console.log(result)
//     res.render('blogs',{title:'Blogs', blogs:result})

//   })
//   .catch((err)=>console.log(err))

//})

router.get("/", blogController.blog_showBlogs); //from lessong 9

// to retrieve a single data

//   router.get('/singleBlog',(req,res)=>{
//     Blog.findById("679911020a8cf5c3eb7f0a4f") //finding a particular data in collection by ID
//     .then((result)=>
//     res.send(result))
//     .catch((err)=>
//     console.log(err))
//   })

// from lesson 8 : to post a blog in DB

// router.post('/',(req,res)=>{
//   const blog = new Blog(req.body); //we create a new instance of our collection and the incoming data from the middleware is now sent to the DB
//   blog.save()
//   .then((result)=>{
//       res.redirect('/blogs');
//   })
//   .catch((err)=>
//   console.log(err)
// )
// })

router.post("/", blogController.blog_create_post);

// route to create blogs page

// router.get('/createBlogs',(req,res)=>{
//   res.render('createBlogs',{title:'Create new blog'})

// })

router.get("/createBlogs", blogController.blog_create_get);

//Route parameters : to access single docs/data to get or delete

// The variable part of the route that may change value are route parameter
//localhost:3000/blogs/:id
//localhost:3000/blogs/12345
//localhost:3000/blogs/hello

// Request type : localhost:3000/blogs/:id    GET

// router.get('/:id',(req,res)=>{
//   const id = req.params.id;
//   //console.log(id)
//   Blog.findById(id)
//   .then((result)=>{
//     res.render('details',{title:'Blog Details', blog:result})
//   })
//    .catch((err)=>
//   console.log(err))
// })

router.get("/:id", blogController.blog_details);

// Request type : localhost:3000/blogs/:id    DELETE

router.delete("/:id", blogController.blog_delete);
//   const id = req.params.id;

//   Blog.findByIdAndDelete(id)
//   .then(() =>{
//     res.json({redirect:'/blogs'})
//   })
//   .catch((err)=>
//   console.log(err))
// })

// router.use((req,res)=>{
//   res.render('404',{title:'error'})
// })

module.exports = router;

// now we have done routing in this way with expres router, we now will learn about MVC
