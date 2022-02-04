var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ');
var line2 = lines.shift().split(' ');

var qtd1 = parseInt(line1[1]);
var qtd2 = parseInt(line2[1]);
var value1 = parseFloat(line1[2]);
var value2 = parseFloat(line2[2]);


var result = value1 * qtd1 + value2 * qtd2;

console.log("VALOR A PAGAR: R$ " + result.toFixed(2));


