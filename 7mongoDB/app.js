// we will connect to mongoDB via mongoose and complete the blog section that we started in lesson 5 viewengines



const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blogs');
//express app
const app = express();

//connect to mongoDB
const dbURI = "mongodb+srv://aryankhadka:heroaryankdka00@cluster0.ec782.mongodb.net/test";
mongoose.connect(dbURI) // connection to the particular DB
// this is actually asynchornous, and returns a promise
.then((result)=> app.listen(3000) ) // we start listening for res only if DB connection is established
.catch((err)=>console.log(err))

 // now we need to create a schema and a model for our blogs in blog.js
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index',{title:'Home',blogs})
})

 // now that we have created a schema and model for our blog, we need to get and save data from and to DB


 // mongoose and mongo sandbox routes

  app.get('/createBlogs',(req,res)=>{
    console.log(req.url)
       const blog = new Blog({
        title:'new blogss',
        snippet:'new blogs',
        body:'new blog',
       })
       blog.save()
       .then((result)=>{
        console.log('yes')
        res.send(result)
       })
       .catch((err)=>{
        console.log(err)
       })
  })
