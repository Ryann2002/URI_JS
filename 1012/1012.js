var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().split(' ');
const pi = 3.14159;
var A = parseFloat(values[0]);
var B = parseFloat(values[1]);
var C = parseFloat(values[2]);


var triangulo = ((A * C)/2).toFixed(3);
console.log("TRIANGULO: " +  triangulo);

var circulo = (Math.pow(C, 2) * pi).toFixed(3);
console.log("CIRCULO: " +  circulo);

var trapezio = (((A + B) * C)/2).toFixed(3);
console.log("TRAPEZIO: " +  trapezio);

var quadrado = (Math.pow(B, 2)).toFixed(3);
console.log("QUADRADO: " +  quadrado);

var retangulo = (A * B).toFixed(3);
console.log("RETANGULO: " +  retangulo);



