var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');
var A = parseInt(valorRecebido.shift());
var B = parseInt(valorRecebido.shift());
var C = parseInt(valorRecebido.shift());
var D = parseInt(valorRecebido.shift());
var result = (A * B - C * D);

console.log("DIFERENCA = " + result);