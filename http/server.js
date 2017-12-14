var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;

        request.setEncoding("UTF-8");
        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk(收到POST数据块) '" + postDataChunk + "'.");
        });
        request.addListener("end", function () {
            route(handle, pathname, response, postData);
        });

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started. Server running at http://127.0.0.1:8888/");
}

exports.start = start;