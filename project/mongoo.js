var mongoose = require('mongoose');
var scame = new mongoose.Schema({
    us:{type:String,required:true},
    ps:{type:String,required:true},
    age:Number,
    sex:{type:Number,default:0},
})
var User = mongoose.model('user', scame);
module.exports=User;