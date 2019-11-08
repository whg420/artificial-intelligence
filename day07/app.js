#! /usr/bin/env node
// 内置模块
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');

let filename = path.join(__dirname,process.argv[2]);
console.log(filename);

let childProcess = createProcess()
function createProcess(){
//    判断文件夹存不存在
    if(fs.existsSync(filename)){
        let child = child_process.spawn('node',[filename]);

        child.stdout.on('data',data => {
            console.log(data)
        })  

        child.stderr.on('data',error => {
            console.log(error)
        })
        return child
    }else{
        console.log("此路径不存在")
    }
}

let water = fs.watch(filename);

water.on('change',() => {
    console.log("server.js变化")
    //把子进程child杀死
    childProcess.kill();
    //创建一个新的子进程
    childProcess = createProcess()
})


