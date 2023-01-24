var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let val = parseFloat(lines.shift());

const availableMoneyBills = [100, 50, 20, 10, 5, 2];
const availableCoins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
availableMoneyBills.forEach((c) => {
  const numOfMoneyBills = parseInt(val / c);
  const remainingMoney = val - numOfMoneyBills * c;
  val = remainingMoney.toFixed(2);
  console.log(`${numOfMoneyBills} nota(s) de R$ ${c.toFixed(2)}`);
});

console.log("MOEDAS:");
availableCoins.forEach((c) => {
  const numOfCoins = parseInt(val / c);
  const remainingMoney = val - numOfCoins * c;
  val = remainingMoney.toFixed(2);
  console.log(`${numOfCoins} moeda(s) de R$ ${c.toFixed(2)}`);
});
