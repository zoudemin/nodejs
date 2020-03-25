var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mong',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('启动成功！')
})