var fs = require('fs');

var readMe = fs.readFileSync('001.txt', 'utf8').split('\n');

calculateFuel = (arrOfFuel) => {
  // Iterate through each input one time
  let result = arrOfFuel.reduce((acc, curEl) => {
    let memoizedResult = 0;
    calculateFuelOfFuels = (fuel) => {
      let curFuel = Math.floor(fuel/3) - 2;
      if(curFuel > 0){
        memoizedResult = curFuel + memoizedResult;
        calculateFuelOfFuels(curFuel);
      } else {
        return;
      }
    }
    
    calculateFuelOfFuels(curEl);
    return acc + memoizedResult;
  },0)

  return result;
}

console.log(calculateFuel(readMe));