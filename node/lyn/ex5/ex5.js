var fs = require("fs");

var dirPath = process.argv[2];
var extension = process.argv[3];

var fileList = fs.readdir(dirPath,(err,list) => {
    for(var i = 0;list[i];i++) {
        var fileSplitted = list[i].split(".");
        var fileExt = fileSplitted[1];

        if (fileExt==extension) {
            console.log(list[i]);
        }
    }
});