var fs = require('fs');

var readMe = fs.readFileSync('002.txt', 'utf8').split(',').map(item => parseInt(item));

calculateOpcode = (arr) => {
  // Iterate step by step
  for(let i =0; i<arr.length; i++){
    if (arr[i] === 99){
      i++;
    } else if (arr[i] ===1) {
      arr[arr[i+3]] = arr[arr[i+1]] + arr[arr[i+2]];
      i = i + 3;
    } else if (arr[i] ===2) {
      arr[arr[i+3]] = arr[arr[i+1]] * arr[arr[i+2]];
      i = i + 3;
    } else {
      console.log(`Value ${arr[i]} at index ${i} did not run`);
    }
  }
  return arr;
}

console.log(calculateOpcode(readMe));