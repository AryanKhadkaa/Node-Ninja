//first of all, 
//we need to import the core module that we need to interact with the file system i.e fs module

const fs = require('fs');

//reading files
fs.readFile('./docs/blog.txt',(err,data)=>{ //takes two args, one is the path to the file and 
                                            //another is a callback funtion(which is an asynchornous function)
    err
    ?console.log(err)
    :console.log(data.toString())
})


//writing files
fs.writeFile('./docs/blog.txt','dope shi',()=>{ //overwrites the content of an exisiting file 
    console.log('file was written')
})
fs.writeFile('./docs/doc.txt','dope shi2',()=>{ //creates a new file and adds the respective content
    console.log('file was written')
})


//directories
if(!fs.existsSync('./assets') ){ //fs.existSync(): method to check for existence of a file/dir
    fs.mkdir('./assets',(err)=>{ //making a directory
         err
         ?console.log(err)
         :console.log('folder created')
    });
}   
else{
    fs.rmdir('./assets',(err)=>{ //removing a directory
        err
        ?console.log(err)
        :console.log("folder deleted")
    });
}

//deleting files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{ //unlink(): method used to delete a file
        err
        ?console.log(err)
        :console.log('file deleted')
    }) 
}

