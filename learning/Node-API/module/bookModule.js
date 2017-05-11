
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
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
