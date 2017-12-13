var fs = require("fs");

// 异步读取
fs.readFile( __dirname + '/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log('1异步读取：'+data.toString());
});

// 同步读取
var data = fs.readFileSync( __dirname + '/input.txt');
console.log('2同步读取：' + data.toString());

console.log("3程序执行结束!");