

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

 // now we need to create a schema and a model for our blogs in blog.
 // which is done in blogs.js

 //register view engine
app.set('view engine', 'ejs');

 //middleware and static files
 app.use(express.urlencoded()); // this basically takes all the url encoded data that alongs for a ride (from the url), and passes it into an object that we can use on a request object.
 app.use(express.static('public'))

 //routes

app.get('/',(req,res)=>{
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index',{title:'Home',blogs})
})
app.get('/about',(req,res)=>{
  res.render('about',{title:'about'})
})

 // now that we have created a schema and model for our blog, we need to get and save data from and to DB


 // mongoose and mongo sandbox routes


 //blog routes

 // to send data to DB
  app.get('/add-blogs',(req,res)=>{
 
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

  app.get('/showBlogs',(req,res)=>{
    Blog.find() //gives us all the docs in our collection i.e blogs and this is also asynchornous and gives us a promies
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
// to retrieve data and display  (we can also filter data)

app.get('/blogs',(req,res)=>{
  Blog.find().sort({createdAt: -1}) //filtering by created date and -1 indicated descending order
  .then((result)=>{
    console.log(result)
    res.render('blogs',{title:'Blogs', blogs:result})

  })
  .catch((err)=>console.log(err))

})

// from lesson 8

app.post('/blogs',(req,res)=>{
  const blog = new Blog(req.body); //we create a new instance of our collection and the incoming data frome the middleware is now sent to the DB 
  blog.save()
  .then((result)=>{
      res.redirect('/blogs');
  })
  .catch((err)=>
  console.log(err)
)
})

app.get('/blogs/createBlogs',(req,res)=>{
  res.render('createBlogs',{title:'Create new blog'})

})

//Route parameters : to access single docs/data to get or delete

// The variable part of the route that may change value are route parameter
   //localhost:3000/blogs/:id
   //localhost:3000/blogs/12345 
   //localhost:3000/blogs/hello


// Request type : localhost:3000/blogs/:id    GET

app.get('/blogs/:id',(req,res)=>{
  const id = req.params.id;
  //console.log(id)
  Blog.findById(id)
  .then((result)=>{
    res.render('details',{title:'Blog Details', blog:result})
  })
   .catch((err)=>
  console.log(err))
})

// Request type : localhost:3000/blogs/:id    DELETE

app.delete('/blogs/:id',(req,res)=>{
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  .then(() =>{
    res.json({redirect:'/blogs'})
  })
  .catch((err)=>
  console.log(err))
})

app.use((req,res)=>{
  res.render('404',{title:'error'})
})