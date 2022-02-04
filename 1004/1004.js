var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');
var A = parseInt(valorRecebido.shift());
var B = parseInt(valorRecebido.shift());
var PROD = A * B;

console.log("PROD = " + PROD);