
// var mongoose = require('mongoose'),
//  Schema =mongoose.Schema;
// var bookModel = new Schema({
// title:{type : String },
// Author: {type : String},
// geners:{type : String}
// //Read :{type : Boolen,default :false}
// });
// module.exports=mongoose.module('Book',bookModel);

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/BookAPI');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var booksSchema = new Schema({
  name: {type:String},
  Authors: { type: String, required: true, unique: true },
 
  
  created_at: {type:Date,default:Date.now},

});
var books =module.exports= mongoose.model('books', booksSchema);

// make this available to our users in our Node applications
module.exports = books;
