#### 子进程

Nodejs 是单进程单线程的

资源的最大化利用，解决单进程单线程的缺点

#### 创建子进程的方法

child_process 是nodejs的内置模块   

1.exec(执行的命令,(error,stdout,stderr)=>{})  返回值：子进程

2.spawn('node',['执行文件路径'])  返回值：子进程

子进程.stdout.on('data', data => {//标准输出流})

子进程.stderr.on('data',data => {//标准错误输出流})

3.fork('执行文件路径')

4.execFile (不常用)

#### 进程间的通讯

send() 

message事件
