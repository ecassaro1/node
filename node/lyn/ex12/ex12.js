var http = require("http");

var server = http.createServer((req,res)=>{
    if(req.method!="GET") {
        res.end();
        return;
    }

    req.on("end",()=>{
        var jsonContent="";

        switch (req.url) {
            case "/api/parsetime":
                jsonContent={
                    "hour": 14,
                    "minute": 23,
                    "second": 15
                };
                break;
            case "/api/unixtime":
                jsonContent={
                    "unixtime": "12341234134"
                };
                break;
        }

        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(jsonContent);
    });
});

server.listen(process.argv[2]);