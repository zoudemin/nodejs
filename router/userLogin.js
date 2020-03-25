const express = require('express');
const router = express.Router();
const User = require('../project/mongoo.js');
const nodemailer = require('../db/nodemailer.js');
let code = parseInt(Math.random()*100000);

/**
 * @api {post} /user/login 用户登录
 * @apiName 用户登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 * @apiParam {Number} codes 验证码
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {Array} res 用户数据
 */
router.post('/login',(req,res)=>{
    const {us,ps,codes} = req.body;
    if(us&&ps&&codes&&codes==code){
        User.find({us,ps}).then((val)=>{
            res.send({state:200,res:val.length>0?val:'无用户数据'});
            code = parseInt(Math.random()*1000000);
        }).catch((err)=>{
            res.send({state:200,res:err});
        })
    }else{
        codes&&codes!==code?res.send({state:200,res:'验证码错误'}):res.send({state:200,res:'失败'});
        code = parseInt(Math.random()*100000);
    }
    console.log(req.body.us)
})
/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 * @apiParam {Number} codes 验证码
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 注册结果
 */
router.post('/reg',(req,res)=>{
    const {us,ps,codes} = req.body;
    if(us&&ps&&codes&&codes==code){
        User.find({us,ps}).then((val)=>{
            code = parseInt(Math.random()*100000);
            if(val.length>0){
                throw new Error('用户已存在')
            }else{
                return User.insertMany({us,ps})
            }
        })
        .then((val)=>{
            res.send({state:200,res:'注册成功'});
        }).catch((err)=>{
            res.send({state:200,res:err});
            code = parseInt(Math.random()*100000);
        })
    }else{
        codes&&codes!==code?res.send({state:200,res:'验证码错误'}):res.send({state:200,res:'失败'});
        code = parseInt(Math.random()*100000);
    }
    console.log(req.body.us)
})
/**
 * @api {post} /user/usermailer 发送验证码
 * @apiName 发送验证码
 * @apiGroup User
 *
 * @apiParam {String} mail 邮箱地址
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 接口处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {
            "state": 200,
            "res": {
                "accepted": [
                    "1522263113@qq.com"
                ],
                "rejected": [],
                "envelopeTime": 398,
                "messageTime": 1482,
                "messageSize": 362,
                "response": "250 Ok: queued as ",
                "envelope": {
                    "from": "zoudemin@uinnova.com",
                    "to": [
                        "1522263113@qq.com"
                    ]
                },
                "messageId": "<6e72dfaf-f55b-1896-e560-338ee6ea6cce@uinnova.com>"
            }
        }
 */
router.post('/usermailer',(req,res)=>{
    const {mail} = req.body;
    if(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail)){
        code = parseInt(Math.random()*100000);
        nodemailer({
            from: '"zoudemin" <zoudemin@uinnova.com>',
            to: mail,
            subject: '邹德敏',
            text: "您的验证码为"+code+" 有效期为100小时",
        }).then((va)=>{res.send({state:200,res:va});}).catch((va)=>{
            res.send({state:200,res:va})
        })
    }else{
        mail?res.send({state:200,res:'Email格式不正确'}):res.send({state:200,res:'无Email'});
    }
    console.log(req.body.mail)
})
module.exports = router;