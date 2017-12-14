/* 
路由模块
*/

function route(handle, pathname, response, Data) {
    console.log("About to route a request for(发送请求的地址)  " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, Data);
    } else {
        console.log("No request handler found for(找不到请求处理程序) " + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;