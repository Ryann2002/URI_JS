var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const km = parseInt(lines.shift());
const minutos = parseInt((60 * km) / 30);
console.log(minutos + " minutos");
