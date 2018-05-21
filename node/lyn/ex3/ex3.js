var fs = require("fs");

var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath);

var fileStr = fileBuffer.toString();

var fileArray = fileStr.split("\n");

var result = -1;

for (var i=0;fileArray[i];i++) {
    result++;
}

console.log(result);

