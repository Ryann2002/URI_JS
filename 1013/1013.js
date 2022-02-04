var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().split(' ');
var A = parseInt(values[0]);
var B = parseInt(values[1]);
var C = parseInt(values[2]);

function oMaior(e,f){
    var result = ((e + f + Math.abs(e - f))/2);
    return result;
}

var maior = oMaior(A,B);
maior = oMaior(maior, C);

console.log(maior + " eh o maior");