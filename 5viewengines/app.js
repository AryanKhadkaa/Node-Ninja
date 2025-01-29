
const express = require('express');

//setting up express app
const app = express();

//listen for reqs
app.listen(3000)

// register view engine with ejs
app.set('view engine','ejs');
//app.set('views','myviews');  // if we have extra myviews directory inside our main view director and need to work with that

//handle responses
app.get('/',(req,res)=>{
      const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index',{title:'Home',blogs});
});

//about page
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'})
})

//create blogs
app.get('/blogs/create',(req,res)=>{
    res.render('createBlogs',{title:'Create a new blog'})
})

//404 page - using .get()
app.use((req,res)=>{
    res.render('404',{title:'404'})
})


