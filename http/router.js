/* 
路由模块
*/
var fs = require("fs");

function route(handle, pathname, response, Data) {
    console.log("About to route a request for(发送请求的地址)  " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, Data);
    } else {
        //如果不是接口，那么读取文件
        fs.readFile( __dirname + pathname, function (err, file) {
            if (err) {
                console.log("No request file found for(找不到请求文件) " + pathname);
                console.error(err);
                response.writeHead(404, { "Content-Type": "text/plain" });
                response.write("404 Not found");
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "*"});
                response.write(file);
                response.end();
            }

        });
        // console.log("No request handler found for(找不到请求处理程序) " + pathname);
        // response.writeHead(404, { "Content-Type": "text/plain" });
        // response.write("404 Not found");
        // response.end();
    }
}

exports.route = route;