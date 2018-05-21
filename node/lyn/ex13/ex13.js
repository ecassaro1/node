var http = require("http");
var url = require("url");


function parseTime(time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
}

function parseUnix(time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer((req,res)=>{
    if(req.method!="GET") {
        console.log("não é get. É "+req.method);
        res.end();
        return;
    }

    if(req.url=="/favicon.ico") {
        console.log("favicon get out!!");
        res.end();
        return;
    }

    console.log("aqui1");

    //req.on("end",()=>{
        console.log("aqui2");
        
        var jsonContent="";
        var d = new Date();
        var theUrl = url.parse(req.url)["pathname"];
        const parsedUrl = url.parse(req.url, true)
        const time = new Date(parsedUrl.query.iso);

        switch (theUrl) {
            case "/api/parsetime":
                console.log("aqui3");
                jsonContent=parseTime(time);
                break;
            case "/api/unixtime":
                console.log("aqui4");
                jsonContent=parseUnix(time);
                break;
        }

        console.log("aqui5.1"+"theUrl="+theUrl);
        console.log("aqui5.2"+"req.url="+req.url);
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify(jsonContent));
    //});
});

server.listen(process.argv[2]);

