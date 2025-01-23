const xyz = require('./people'); //accessing the file


 console.log(xyz)
 console.log(xyz.People,xyz.Ages)

//before destructuring
 //console.log(people) //cannot access the variables of the file


const {People,Ages}= require('./people'); //destrcuting the data from file
//after destructuring
console.log(People,Ages) //can de accessed now after destructuring

// os object
const os = require('os')
console.log(os.platform(),os.homedir())
