var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mong',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
//   var kittySchema = mongoose.Schema({
//     name: String
//   });
// //   var Kitten = mongoose.model('Kitten', kittySchema);
// //   var felyne = new Kitten({ name: 'Felyne' });
// console.log(felyne.name); // 'Felyne'
//     kittySchema.methods.speak = function () {
//     var greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }
  
//   var Kitten = mongoose.model('Kitten', kittySchema);
//   var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"
var scame = new mongoose.Schema({
    us:{type:String,required:true},
    ps:{type:String,required:true},
    age:Number,
    sex:{type:Number,default:0},
})
var User = mongoose.model('user', scame);
// User.insertMany({
//     us:'zoudemin',
//     ps:'123',
//     age:28,
//     sex:1
// }).then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.error(data)
// })
User.find({
    us:'zoudemin'
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})
});
