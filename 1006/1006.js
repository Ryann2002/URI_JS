var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');
var A = parseFloat(valorRecebido.shift()) * 2;
var B = parseFloat(valorRecebido.shift()) * 3;
var C = parseFloat(valorRecebido.shift()) * 5;
var result = (A + B + C)/10;

console.log("MEDIA = " + result.toFixed(1));