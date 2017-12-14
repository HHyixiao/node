/* 
请求处理器
 */
var exec = require("child_process").exec;

function start(response, Data) {
    console.log("Request handler(请求处理程序) 'start' was called(被调用).");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="提交" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

function upload(response, Data) {
    console.log("Request handler(请求处理程序) 'upload' was called(被调用).");

    response.writeHead(200, {"Content-Type": "text/plain;charset=UTF-8"});
    response.write("You've sent(你已经发送了): " + decodeURIComponent(Data));
    response.end();
}

exports.start = start;
exports.upload = upload;