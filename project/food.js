var mongoose = require('mongoose');
var scame = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    desc:{type:String,required:true},
    typename:{type:String,required:true},
    typeid:{type:Number,required:true},
    img:{type:String,required:true},
})
var Food = mongoose.model('food', scame);
module.exports=Food;