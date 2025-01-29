//an example of installing and using a 3rd party package

//LODASH
//lodash provies us various features that makes our code cleaner and more efficient.

const _ = require('lodash'); //import lodash using require and creating an instance of it on "_"

const num = _.random(0,20)
console.log(num) // generates a random number from 0 to 20