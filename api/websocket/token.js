const jwt = require('jsonwebtoken');
let screat = 'slkdjfljsljdf'; // 私钥
function creatToken(payload) {
    payload.ctime = Date.now();
    payload.exp = 1000*60*60*24*7;
    return jwt.sign(payload,screat);
}
function checkToken(token) {
    return new Promise((resolve,reject)=>{
        jwt.verify(token,screat,(err,data)=>{
            if(err){
                reject('token 验证失败')
            }
            resolve(data);
        })
    })
}

module.exports = {
    creatToken,
    checkToken
}