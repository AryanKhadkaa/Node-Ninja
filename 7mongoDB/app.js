

// we will connect to mongoDB via mongoose and complete the blog section that we started in lesson 5 viewengines


const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blogs');
//express app
const app = express();

//connect to mongoDB
const dbURI = "mongodb+srv://aryankhadka:heroaryankdka00@cluster0.ec782.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbURI) // connection to the particular DB
// this is actually asynchornous, and returns a promise
.then((result)=> app.listen(3000) ) // we start listening for res only if DB connection is established
.catch((err)=>console.log(err))

 // now we need to create a schema and a model for our blogs in blog.js
app.set('view engine', 'ejs');

//routes

app.get('/',(req,res)=>{
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index',{title:'Home',blogs})
})

app.get('/blogs',(req,res)=>{
  Blog.find().sort({createdAt: -1}) //filtering b created date and -1 indicated descending order
  .then((result)=>{
    console.log(result)
    res.render('blogs',{title:'Blogs', blogs:result})

  })
  .catch((err)=>console.log(err))

})
 // now that we have created a schema and model for our blog, we need to get and save data from and to DB


 // mongoose and mongo sandbox routes


 //blog routes

 // to send data to DB
  app.get('/createBlogs',(req,res)=>{
    console.log(req.url)
       const blog = new Blog({
        title:'new blogss',
        snippet:'new blogs',
        body:'new blog',
       })
       blog.save()  // this is an  asynchrounous task, it takes some time and returns a promise
       .then((result)=>{ // so we use a then method, which will fire a callback fucntion when this promise resolves (fulfills)
        console.log('yes')
        res.send(result)
       })
       .catch((err)=>{ // catch method for errors
        console.log(err)
       })
  })

  // to retrieve data from DB

  app.get('/createBlogs',(req,res)=>{
    Blog.find() //gives aus all the docs in our collection i.e blogs and this is also asynchornous and gives us a promies
    .then((result)=>{
      res.send(result);
    })
    .catch((err)=>console.log(err))
  })

  // to retrieve a single data

  app.get('/singleBlog',(req,res)=>{
    Blog.findById("679911020a8cf5c3eb7f0a4f") //finding a particular data in collection by ID
    .then((result)=>
    res.send(result))
    .catch((err)=>
    console.log(err))
  })
