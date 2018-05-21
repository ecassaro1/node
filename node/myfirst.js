var http = require('http');
//var dt = require('./myfirstmodule');

var times=0;

http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time are currently: " + dt.myDateTime());
    //res.end('<h1>Hello World!!!!!</h1>');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("HELLO WORLD");

    times++;
    console.log("HELLO WORLD"+times);
}).listen(8081);