var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const timeExpended = parseFloat(lines.shift());
const averageAcceleration = parseFloat(lines.shift());
const gasPerKilometer = 12;
const litersOfGas = timeExpended * averageAcceleration / gasPerKilometer;

console.log(litersOfGas.toFixed(3));
