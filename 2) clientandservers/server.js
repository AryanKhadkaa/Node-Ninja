// Here we need to build our own server that interacts with the client( listens to reuestions coming from the browser) and decides what responses to send, all manually 
// unlike PHP, where we dont have to create a server manually, but rather is provided by other tools like Apache

// we require a core node module i.e http module that can handle HTTP requests and send HTTP responses
// It provides basic functionality to build simple servers without needing external librariies.

const http = require('http'); 

//now we can use this to create a server as below

const server = http.createServer((req, res)=>{ //createServer() is the method to set up a server and it can also be stored in a const which will store the instance of the server 
    //above we have created/set up  a server and this takes a callback fn as an argument to handle requests and responses
    
    //request(req) -> comes along with full of info about the req such as the URL that is being requested
    //response(res) -> obj we used to send a response that is used in the browser
 
   // console.log(req.url,req.method) // we can get vaiours request methods and data from req object when the sever is hosted

//  --RESPONSE obj--

    // set header content type

    res.setHeader('Content-Type','text/html');

    // res.write('<head><link href="#" rel="stylesheet"></head>')
    // res.write('<h1>HELLO</h1>');
    // res.write('<p>hello, ninjas</p>');
    // res.end();

    //so as shown above, sending a respond in this case is basically done in 3 steps
    // First, we set the content type of the data to be sent to the browser
    // Secondly, we write wtv content we need/want to send 
    // And at last, we end the response.

    //The above method of sending a response/ content is kinda of messy as we are writing our tags and all multiple times
    //so there is a better method for it where we can send a whole html page.

    //For that we have create a views folder where we have our html file

    //NOW, we need our core node module FS for reading the file
    const fs  = require('fs');
    
// Now, if we also want to route/navigate to differnt webpages
   
let path = './views/' //path to the directory containing all the html
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode = 200;
        break;
    default:
        path+='404.html'
        res.statusCode = 400;
        break;
}
console.log(path)


// --send an html file--
    fs.readFile(`${path}`,(err,pathData)=>{
        if(err){
        console.log(err)}
       else{
        res.write(pathData)
        res.end()
        // NOTE: if we have to send only one data as the response,
        // we can directly perform res.end(data);
       }
    })



    

});

// to invoke/run/initialize  the server, we use the listen method to start the server on specified port
server.listen(3000,'localhost',()=>{
    console.log('listenting for req on port 3000')

})

//above here now we're listening for request on 'localhost' and on a specified port number '3000' 
//so what does this actually mean?

   // LOCALHOST AND PORT NUMBERS //

//Local host is like a domain name on the web google.com for eg. But this one takes us to a very specific
//IP address called loopback IP addres now this IP is 127.0.0.1 and it points direecly back to our own computer.
//So that means when we're connecting to the local host domain in the browser, we're connecting to out own computer,
//and that way our computer can act as a host, i.e listen for requests coming to our own computer 

//Port number are like 'doors' into a computer. Port number represents a specific channel,gateaway or port to our computer
//that a certain bit of software our server should comunicate through.
//For eg, there are many softwares in our computer that runs on internet to send and recieve data. Whatsapp, Discord, Skype.
//Now they will all be doing this via different port numbers to keep info separate from one another.
//Thus, ports are kind of like doors into our computers through whih internet communications can be made to different programs.

//   localhost:3000 -> this lets browser know to communicated to our own computer via this particular port number
// For different servers -> different port numbers

