 // 1) What is middleware? // 
 //given in aboutMiddleware.txt


 // now we create different middlewares below


const express = require('express')
const app = express();

app.listen(3000);
app.set('view engine','ejs')

//   app.use((req,res,next)=>{
//     console.log('new reqs made');
//     console.log('host:', req.hostname);
//     console.log('path:',req.path);
//     console.log('method', req.method);
// });

// once this response in .use is used/sent, the other routing or middlewares do not work by default
// and so we use method called next() to handle it

  // 2) USING next()

  //next() methods solves the above issure where .use method stops the middlewares or routes below that block

// app.use((req,res,next)=>{
//     console.log('new reqs made');
//     console.log('host:', req.hostname);
//     console.log('path:',req.path);
//     console.log('method', req.method);
//     next();
// });

// app.use((res,req,next)=>{
//     console.log('in the next middleware')
//     next()
// })

app.get('/',(req,res)=>{
  res.render('index',{title:'Home'})
})

  // 3) Using 3rd Party middleware //

//Express provides us with 3rd party middleware like morgan(which is a logger, that lets us log infos) and many others
//which lets us add pre-built middlewares in our website that gives us different features
//A middleware called helment, which is a security piece of middleware and there are others too for sessions, cookies which makes our experience better


   // -> Using morgan

//In Express.js, Morgan is a middleware library used for logging HTTP requests. It provides detailed logs
//for every request made to your server, which is helpful for debugging and monitoring.


const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/about',(req,res)=>{
  res.render('index',{title:'Home'})
})

// Some few predefined log formats are:

// dev: Detailed logs with colored status codes.
// common/combined: Standard logging formats (good for production).
// tiny: Minimal logging.


 // 4) Handling static files : using styles.css

// As we cannot directly link static files like css files to our html pages here.
//we can use a static middleware as below to specify which file to to access in our html
// as we have given the path as 'public' in our middleware below, there we have our static files 
// which are now available to our html pages as root files directly and then they can be embedded

 app.use(express.static('public'));


