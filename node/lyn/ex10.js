var net = require("net");

var server = net.createServer(function(socket) {
    var date = new Date();

    var td = 
        date.getFullYear()
        + '-' +
        FormatNumberLength(date.getMonth()+1,2)
        + '-' +
        FormatNumberLength(date.getDate(),2)
        + ' ' +
        FormatNumberLength(date.getHours(),2)
        + ':' +
        FormatNumberLength(date.getMinutes(),2)
        + '\n';

    socket.write(td);
    socket.end();

    console.log("td="+td);    
});

server.listen(process.argv[2]);

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}