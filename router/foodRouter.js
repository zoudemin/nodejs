const express = require('express');
const router = express.Router();
const Food = require('../project/food.js');
const request = require('request');
const multer = require('multer');
let code = parseInt(Math.random()*100000);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //指定文件路径
        cb(null, './api/image')
    },
    filename: function (req, file, cb) {
        //指定文件名
        cb(null, file.fieldname + '-' + Date.now()+'.'+file.mimetype.split('/')[1])
    }
})
const upload = multer({
    storage: storage,
    limits:{
        fileSize:3000000000,
    }
})
  

/**
 * @api {post} /food/add 添加菜品
 * @apiName 添加菜品
 * @apiGroup Food
 *
 * @apiParam {String} name 菜品名称
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 类型名称
 * @apiParam {Number} typeid 类型id
 * @apiParam {String} img 图片
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {
            "err": 0,
            "state": 200,
            "msg": "添加成功"
        }
 */
router.post('/add',(req,res)=>{
    const {name,price,desc,typename,typeid,img}=req.body;
    let data = {
        name,
        // :'火山飘雪',
        price,
        // :'999',
        desc,
        // :'超赞',
        typename,
        // :'川菜',
        typeid,
        // :1,
        img,
        // :'/public/image/1.png'
    }

    Food.find({name}).then((val)=>{
        if(val.length>0){
            // throw new Error('菜品名称已存在')
            return Promise.reject('菜品名称已存在')
        }else{
            return Food.insertMany(data)
        }
    })
    .then((data)=>{
        res.send({err:0,state:200,msg:'添加成功'})
    }).catch((err)=>{
        res.send({err,state:200,msg:'添加失败'})
    })
})
/**
 * @api {post} /food/select 查询菜品
 * @apiName 查询菜品
 * @apiGroup Food
 * @apiParam {Number} typeid 类型id
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {
            "err": 0,
            "state": 200,
            "msg": [
                {
                    "_id": "5e78318f8f0b8b414ce65d3f",
                    "name": "火山飘雪",
                    "price": "999",
                    "desc": "超赞",
                    "typename": "川菜",
                    "typeid": 1,
                    "img": "/public/image/1.png",
                    "__v": 0
                }
            ]
        }
 */
router.post('/select',(req,res)=>{
    const {id} = req.body;
    Food.find({typeid:id}).then((data)=>{
        res.send({err:0,state:200,msg:data})
    }).catch((err)=>{
        res.send({err,state:200,msg:'添加失败'})
    })
})
/**
 * @api {post} /food/selectkw 关键字查询
 * @apiName 关键字查询
 * @apiGroup Food
 * @apiParam {String} kw 模糊查询关键字
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {
    "err": 0,
    "state": 200,
    "msg": [
        {
            "_id": "5e78318f8f0b8b414ce65d3f",
            "name": "火山飘雪",
            "price": "999",
            "desc": "超赞",
            "typename": "川菜",
            "typeid": 1,
            "img": "/public/image/1.png",
            "__v": 0
        }
    ]
}
 */
router.post('/selectkw',(req,res)=>{
    const {kw} = req.body;
    let reg = new RegExp(kw);

    Food.find({$or:[{name:{$regex:reg}},{desc:{$regex:reg}}]}).then((data)=>{
        res.send({err:0,state:200,msg:data})
    }).catch((err)=>{
        res.send({err,state:200,msg:'关键字查询失败'})
    })
})
/**
 * @api {post} /food/del 删除
 * @apiName 删除
 * @apiGroup Food
 * @apiParam {String} id 删除id
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {err:0,state:200,msg:'删除成功'}
 */
router.post('/del',(req,res)=>{
    const {id} = req.body;
    Food.remove({_id:id}).then((data)=>{
        res.send({err:0,state:200,msg:'删除成功'})
    }).catch((err)=>{
        res.send({err,state:200,msg:'删除失败'})
    })
})
/**
 * @api {post} /food/update 修改
 * @apiName 修改
 * @apiGroup Food
 * @apiParam {String} name 菜品名称
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 类型名称
 * @apiParam {Number} typeid 类型id
 * @apiParam {String} img 图片
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {
            "err": 0,
            "state": 200,
            "msg": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
 */
router.post('/update',(req,res)=>{
    const {name,price,desc,typename,typeid,img,_id}=req.body;
    let data = {
        name,
        price,
        desc,
        typename,
        typeid,
        img,
        _id
    }

    Food.updateOne({_id},data)
    .then((data)=>{
        res.send({err:0,state:200,msg:data})
    }).catch((err)=>{
        res.send({err,state:200,msg:'修改失败'})
    })
})
/**
 * @api {post} /food/pages 分页list
 * @apiName 分页list
 * @apiGroup Food
 * @apiParam {String} pageSize 每页数据条数
 * @apiParam {String} page 当前页
 *
 * @apiSuccess {Number} state 请求状态码
 * @apiSuccess {String} res 处理结果
 * @apiSuccessExample {json} 接口返回值example:
 *     {
            "err": 0,
            "state": 200,
            "msg": [
                {
                    "_id": "5e78318f8f0b8b414ce65d3f",
                    "name": "火山飘雪",
                    "price": "999",
                    "desc": "超赞",
                    "typename": "川菜",
                    "typeid": 1,
                    "img": "/public/image/1.png",
                    "__v": 0
                },
                {
                    "_id": "5e7834a14140273358f5a9da",
                    "name": "火山飘雪666",
                    "price": "999",
                    "desc": "超赞",
                    "typename": "豫菜",
                    "typeid": 2,
                    "img": "/public/image/1.png",
                    "__v": 0
                }
            ]
        }
 */
router.post('/getInfo',(req,res)=>{
    const {pageSize=5, page=1} = req.body;
    const {val} = req.body;
    let reg = new RegExp(val);
    Food.find({$or:[{name:{$regex:reg}},{desc:{$regex:reg}}]}).limit(Number(pageSize)).skip(Number((page-1)*pageSize)).then((data)=>{
        res.send({err:0,state:200,msg:data})
    }).catch((err)=>{
        res.send({err,state:200,msg:'分页查询失败'})
    })
})

/**
 * @api {post} /food/upload 上传图片
 * @apiName 上传图片
 * @apiGroup Food
 * @apiParam {String} avatar 图片对象
 *
 */
router.post('/upload',upload.single('avatar'),(req,res)=>{
    res.send({state:200,msg:{url:'/public/image/'+req.file.filename}});
})

/**
 * @api {post} /food/request 跨域百度
 * @apiName 跨域百度
 * @apiGroup Request
 */
router.post('/request',(req,res)=>{
    request('http://www.baidu.com',(err,response,body)=>{
        if(!err){
            res.send(body);
        }
    })
})
module.exports=router