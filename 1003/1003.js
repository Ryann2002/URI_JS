var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');
var A = parseInt(valorRecebido.shift());
var B = parseInt(valorRecebido.shift());
var SOMA = A + B;

console.log("SOMA = " + SOMA);