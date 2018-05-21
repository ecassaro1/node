var fs = require("fs");

module.exports = function(dirPath,iFileExt,callback) {
    fs.readdir(dirPath,(err,list) => {
        if (err) {
            return callback(err);
        }

        var result = [];
        for(var i = 0;list[i];i++) {
            var fileSplitted = list[i].split(".");
            var thisFileExt = fileSplitted[1];
    
            if (thisFileExt==iFileExt) {
                result.push(list[i]);
            }
        }
        
        callback(null,result);
    });   
}