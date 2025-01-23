  const fs = require('fs')

//creating a readStream
  //const readStream = fs.createReadStream('./docs/largefile.txt')
  const readStream = fs.createReadStream('./docs/largefile.txt',{encoding:'utf8'}) // this encoding utf8 method will ensure that the data comes in as it is ; automatically appears in readable format

 //creating a writeStream
  const writeStream = fs.createWriteStream('./docs/writefile.txt')

  readStream.on('data',(chunk)=>{
    console.log('.....new chunk.....')
    console.log(chunk)
    console.log('\n NEW CHUNK \n')
    console.log(chunk)
    writeStream.write(chunk)

  })

// ANOTHER WAY OF READING/WRITING (in chunks) i.e piping
//piping: shortend method for reading and writing from/to the stream
   
  //readStream.pipe(writeStream) // this also performs the reading and writing essentially as above but is shorter
                                //what we're doing basically is opening the readStream, reading data and everytime we get a chunk, under the hood, it's piping that into the write stream


 


