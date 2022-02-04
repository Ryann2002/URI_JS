var input = require('fs').readFileSync('stdin', 'utf8');
var valorRecebido = input.split('\n');
var A = parseInt(valorRecebido.shift());
var B = parseFloat(valorRecebido.shift());
var result = (A / B).toFixed(3);

console.log(result + ' km/l');