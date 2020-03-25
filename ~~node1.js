const fs = require('fs');
function ifhave() {
    return new Promise((resolve,reject)=>{
        fs.stat('./zdm.js',(err,stat)=>{
            if(err){
                reject(err)
            }else{
                resolve(stat)
            }
        })
    })
}
function del(){
    return new Promise((resolve,reject)=>{
        fs.unlink('./zdm.js', (err)=>{
            if(err){
                reject(err)
            }else{
                resolve('删除成功！')
            }
        })
    })
}
ifhave().then((val)=>{
    return del();
}).then((del)=>{
    console.log(del)
    return Promise.resolve(del)
}).then((c)=>{
    console.log(c)
    return c;
}).then((k)=>{
    console.log(k)
    throw new Error('退出链式')
}).then(()=>{
    return Promise.reject('zdm')
}).catch((val)=>{
    console.log(val)
    console.log('文件不存在')
})