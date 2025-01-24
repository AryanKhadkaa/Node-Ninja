   // 1) What is express?

// As we have seen in our 2nd lesson in server.js, we created a server, hadnles reqs and responses, routes, redirects and etc and it was fine
// But if we were to create a larger server incluing more routes and extra features, the code base would be unoraganized and ugly and also difficult to read ana manage

// That is where Express comes in action

// Express is a node framework that helps us to easily manage our routing, reqs, server side logic and responses in a much more organized way
// Express is not necessarily needed but it helps us wrie clean code and makes it much easier to create servers and handle it, that is why we use express.
   




   // 2) CREATING AN EXPRESS APP //

//after installing 'express', we now create an express app

//First thing we need to do is require('express') to load and use the exporess modules
const express = require('express'); // require('express') returns us a function and we store that in an intance 'express' then we later invote it on the app var below

//setting up an express app

const app = express(); // what we're doing here is invoking the function returned above(stored in express) and creating an instance of that

//listening for requests
app.listen(3000);

//now that we've listened for requests, how do we provide the response to them?
// we do that using .get method, it is used to handle the requests and to send responses

 
// app.get('/',(req,res)=>{ // this method takes two args, one is the url you need to get the request from and
                                                    // another is a callback fn that has req and res, to see req details and to send response 

    // res.write('..')
    // res.end()

    //instead of writing our content like we do in normal node server, we can use .send() method to send the content
    //in a better way

    // res.send('<p>Home Page WOW</p>'); 
    
    // this provides us better features as
    //infers status code
    //do not need to manually specify the content type like we have done in server.js  i.e res.setHeader('Content-Type','text/html');

//})

   // 3) ROUTING AND SENDING HTML PAGES/FILES

const path = require('path') //importing the mpath module to access the html pages from outer paths folders
                             //The path module provides utilities for working with file and directory paths.
app.get('/',(req,res)=>{
    res.sendFile('./2clientandservers/views/index.html',{
        root:path.join(__dirname,'..')
    })
})
app.get('/about',(req,res)=>{
    res.sendFile('./2clientandservers/views/about.html',{
        root:path.join(__dirname,'..')
    })
})

   // 4) REDIRECTS AND 404s//

//redirects
app.get('/about-us',(req,res)=>{ //unlike in normal node server in server.js, here we can simply use .redirect('/path') to redirect to any page
    res.redirect('/about');
})

//404 page

// so to add a 404 page to our site, we use .use method
// .use method is used to create middlewares and fire middleware functions in Express and we'll learn more about it later

app.use((req,res)=>{
    res.sendFile('./views/404.html',{
        root:path.join(__dirname,'..')
    })
})

// so how this basically works is, when we do app.use(....), we are making this method go through every routes available above it,
// we have '/', '/about' routes/pages above this method, so what this does it,
// first of all our app sees if there is a path '/' is there is then it fires the respective call back function and the homepage is shown, similar for about page
// now we some random or unhandled route/path is provided in the URL, this particular function is fired which will load our 404 page.

// REMEMBER: we keep this app.use at last of our routings as if it is kept above any other routes, it will first handle the routes/ requests above it
// and stop as soon as it reaches at app.use...


// So, this was a basic overview of an express server and how it has better code organization and features than normal node server
// we can compare the server.js from 2clientandservers and this to see the difference.
