const mongoose = require('mongoose')
const Schema = mongoose.Schema; //.Schema here is a constructive fn, which we use to create a new schema
// So remember, Schema is the thing thats gonna define the structure of the document that 
// we want to store inside our collection, 
// its a thing that a model wraps around

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true });// enabling the timestamps property in our schema will automatically generate timestamps property for us
                      // on our blogs documents(in DB), timestamps as in createdAt, updatedAt property, meaning when which doc in our
                      // collection is created/updated


// now that we have created a schema of our documetn type to be posted (blog) in a collection
// we now need to create a model
// again, remember, schema is the thing that defines the structure of our document, and the model is the thing that surround the schema and provides us an interface 
// by which to communicate with a DB collection for that document type

 //creating a model
// syntax: mongoose.model(modelName, schema) 

const Blog = mongoose.model('Blog', blogSchema); // first arg= must be the name of this model,
                                                // this name is imp as this will automatically pluralized and lowercased(so Blog will turn into blogs) and will be the name of our collection in the DB.
                                                // second arg = schema of the model because it defines the structure of documents in the MongoDB collection that the model will interact with.
                                                                                  
module.exports = Blog;