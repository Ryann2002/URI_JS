var input = require("fs").readFileSync("stdin", "utf8");
var valorRecebido = input.split("\n");
var NUMBER = parseInt(valorRecebido.shift());
var SALARY = parseInt(valorRecebido.shift());
var HOUR = parseFloat(valorRecebido.shift());
var result = SALARY * HOUR; 


console.log("NUMBER = " + NUMBER);
console.log("SALARY = U$ " + result.toFixed(2));
