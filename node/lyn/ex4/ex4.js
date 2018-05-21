var fs = require("fs");

var filePath = process.argv[2];

var fileBuffer = fs.readFile(filePath,(err,data) => {
    var fileStr = data.toString();

    var fileArray = fileStr.split("\n");
    
    var result = -1;
    
    for (var i=0;fileArray[i];i++) {
        result++;
    }
    
    console.log(result);
});
