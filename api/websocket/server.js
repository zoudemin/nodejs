const WebSocket = require('ws');
const ws = new WebSocket.Server({port:8080},()=>{
    console.log('socket start')
})
let clinets = [];
ws.on('connection',(clinet)=>{
    clinets.push(clinet);
    clinet.send('欢迎光临！')
    clinet.on('message',(msg)=>{
        console.log(msg)
    })
    clinet.on('close',(msg)=>{
        console.log('前段主动断开了链接'+msg)
    })
})
setInterval(()=>{
    for (let index = 0; index < clinets.length; index++) {
        clinets[index].send(new Date());
    }
},3000)