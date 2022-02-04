var input = require("fs").readFileSync("stdin", "utf8");
var valorRecebido = input.split("\n");
var nome = (valorRecebido.shift()).toString();
var salario = parseFloat(valorRecebido.shift());
var vendas = parseFloat(valorRecebido.shift());
var result = salario + vendas * 0.15;

console.log("TOTAL = R$ " + result.toFixed(2));
