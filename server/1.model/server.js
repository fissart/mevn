const mongoose = require('mongoose');
const Schema=mongoose.Schema
const UserSchema=new Schema({
	name:{type:String},
	username:{type:String},
	password:{type:String},
})
module.export=User=mongoose.model('User,UserSchema');
