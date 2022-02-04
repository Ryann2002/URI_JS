var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');
var A = parseFloat(valorRecebido.shift()) * 3.5;
var B = parseFloat(valorRecebido.shift()) * 7.5;
var result = (A + B)/11;

console.log("MEDIA = " + result.toFixed(4));