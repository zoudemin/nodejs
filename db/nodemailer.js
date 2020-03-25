"use strict";
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: "smtp.exmail.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'zoudemin@uinnova.com', // generated ethereal user
        pass: '8PUDyFq7cCagZLxm' // generated ethereal password
    }
});
// let mailobj = {
//     from: '"zoudemin" <zoudemin@uinnova.com>',
//     to: '1522263113@qq.com',
//     subject: '邹德敏',
//     text: "您的验证码为51886 有效期为100小时",
// }
// send mail with defined transport object
module.exports = function send(val) {
    console.log(val)
    return new Promise((resolve,reject) => {
        transporter.sendMail(val, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        }
        )
    })
}
