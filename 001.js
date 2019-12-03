var fs = require('fs');

var readMe = fs.readFileSync('001.txt', 'utf8').split('\n');

calculateFuel = (arrOfFuel) => {
  return arrOfFuel.reduce((acc, curEl) => {
    return acc + Math.floor(curEl/3) - 2;
  },0)
}

console.log(calculateFuel(readMe));