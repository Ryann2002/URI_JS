var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');

const pi = 3.14159;
var entrada = parseFloat(valorRecebido.shift());
var saida = Math.pow(entrada, 2) * pi;

console.log("A=" + saida.toFixed(4));