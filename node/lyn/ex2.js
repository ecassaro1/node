
var sum=0;
for(var i=2;process.argv[i];i++) {
    sum=sum+Number(process.argv[i]);
}

console.log(sum);