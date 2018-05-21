var http = require("http");
var fs = require("fs");

var filePath = process.argv[3]||"files/f1.txt";

var port = process.argv[2];

var server = http.createServer((request,response)=>{
    src = fs.createReadStream(filePath);
    src.pipe(response);
});

server.listen(port);

/*
function readFile(filePath) {
    var fileBuffer = fs.readFileSync(filePath);
    var fileStr = fileBuffer.toString();
    return fileStr;
}
*/

