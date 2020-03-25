const express = require('express');
const db = require('./db/connect.js');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('./db/nodemailer.js');
const request = require('request');
// nodemailer({
//         from: '"zoudemin" <zoudemin@uinnova.com>',
//         to: '1522263113@qq.com',
//         subject: '邹德敏',
//         text: "您的验证码为51886 有效期为100小时",
//     }).then((va)=>{console.log(va)})
const app = express();
const userRouter = require('./router/userLogin.js');
const foodRouter = require('./router/foodRouter');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use('/public',express.static(path.join(__dirname, '/api')));
app.use('/user',userRouter);
app.use('/food',foodRouter);
app.listen(3000,()=>{
    console.log('成功启动!')
})