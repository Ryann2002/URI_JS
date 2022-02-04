var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

let x1 = parseFloat(p1[0]);
let x2 = parseFloat(p2[0]);
let y1 = parseFloat(p1[1]);
let y2 = parseFloat(p2[1]);

var result = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));  

console.log(result.toFixed(4));


