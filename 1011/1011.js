var input = require("fs").readFileSync("stdin", "utf8");
var valorRecebido = input.split("\n");

const pi = 3.14159;
var raio = parseInt(valorRecebido.shift());
var result = (4/3) * pi * Math.pow(raio,3);

console.log("VOLUME = " + result.toFixed(3));
