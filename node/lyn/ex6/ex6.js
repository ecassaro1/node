var listDir = require("./listDirModule");

listDir(process.argv[2],process.argv[3],(err,list)=>{
    if (err) {
        return console.error("it has given bad",err);
    }

    list.forEach((file)=>{
        console.log(file);
    })
});