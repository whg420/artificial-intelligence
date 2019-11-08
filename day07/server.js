// 引入http和fs
const http = require('http');
const fs = require('fs');
// 起服务
const server = http.createServer((req,res) => {
// 判断获取的url是哪种格式
    if(req.url === '/text'){
//writeHead(状态码，{'Content-Type':'text/plain'})
        res.writeHead(200,{'Content-Type':'text/plain'})    
        // 发送text
        res.end('text---text') //buffer 字符串
    }else if(req.url === '/json'){
//writeHead(状态码，{'Content-Type':'text/plain'})
        res.writeHead(200,{'Content-Type':'application/json'})
        // end发送字符串和butter格式的
        res.end(JSON.stringify({code:1,list:[1,2,3]}))
    }else if(req.url === '/jpg'){
//writeHead(状态码，{'Content-Type':'text/plain'})
        res.writeHead(200,{'Content-Type':'image/jpeg'})

        let imgBuf = fs.readFileSync('./1.jpg'); //buffer
        res.end(imgBuf);
    }
})
// 环境变量，例如通过process.env.NODE_ENV获取不同环境项目的配置信息 process.env.PORT
server.listen(process.env.PORT || 3000,() => {
    console.log(process.pid);
    console.log("服务启动成功"+'3000')
})
//设置响应头

//setHeader('Content-Type','text/plain')
