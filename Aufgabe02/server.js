var http = require('http');
var server = http.createServer(function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    response.writeHead(200, { "Content-Type": "text\plain" });
    if (request.method == "GET") {
        response.end("received GET request.")
    }
    else if (request.method == "POST") {
        console.log(request.body);
        response.end("received POST request.");
    }
    else {
        response.end("Undefined request .");
    }
});

server.listen(8000);
console.log("Server running on port 8000");