var http = require("http");

var queue = [];

getData(process.argv[2]);
getData(process.argv[3]);
getData(process.argv[4]);

function getData(address) {
    http.get(address,(response)=>{
        queue.push({
                        address:    address,
                        data:       null
         });

        response.setEncoding("utf8");

        var allData="";

        response.on("data",(dataChunk)=>{
            allData+=dataChunk;
        });

        response.on("end",()=>{            
            var complete=0;
            queue.forEach((entry)=>{
                if (entry.address==address) {
                    entry.data = allData;
                }

                if (entry.data) complete++;
                
                if (complete==3) finalize();
            });
        });    
    });
}

function finalize() {
    queue.forEach((entry)=>{
        //console.log(entry.address);
        console.log(entry.data);
    });
}