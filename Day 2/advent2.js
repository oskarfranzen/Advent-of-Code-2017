const fs = require("fs");
const input = fs.readFileSync("./inputDay2.txt", "utf8").split("\n");
var checkSum = 0;

for(i= 0; i < input.length; i++) {
    checkSum += getCheckSum(input[i].split("\t").map(x=> parseInt(x)));
}

function getCheckSum(input) {
    return Math.max(...input) - Math.min(...input);
}
    
console.log(checkSum);
