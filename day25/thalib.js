const fs = require('fs');
const { join } = require('path');
// importing file and assigning to 2D array
let TwoDArr = fs
  .readFileSync(join(__dirname, 'inputThalib.txt'), 'utf8')
  .split('\n')
  .map((a) => a.split(''));
//console.log(map);
const NumberOfRows = TwoDArr.length;
const NumberOfColoumn = TwoDArr[0].length;
//console.log(TwoDArr);
var StepCounter = 0;
var Flag = false;
function Copy(map) {
  //return newMap = JSON.parse(JSON.stringify(map));
  return (newMap = map.map((row) => row.map((cell) => cell)));
}
const printMap = () => {
  for (let i = 0; i < NumberOfRows; i++) {
    for (let j = 0; j < NumberOfColoumn; j++) {
      process.stdout.write(ProgramArr[i][j]);
    }
    console.log('\n');
  }
};
var ProgramArr = Copy(TwoDArr);
while (Flag == false) {
  //console.log('Hello');
  Flag = true;
  StepCounter += 1;
  console.log(StepCounter);
  //printMap()
  // copying the array so that updated cells are not re-read
  var StartArr = Copy(ProgramArr);
  // moving east facing sea cucumbers
  for (let row = 0; row < NumberOfRows; row++) {
    for (let coloumn = 0; coloumn < NumberOfColoumn; coloumn++) {
      // use of the modulus function is able to account for when sea cucumbers has to come to 0 position when they come to end of the map
      if (
        ProgramArr[row][coloumn] === '>' &&
        ProgramArr[row][(coloumn + 1) % NumberOfColoumn] === '.'
      ) {
        StartArr[row][coloumn] = '.';
        StartArr[row][(coloumn + 1) % NumberOfColoumn] = '>';
        Flag = false;
      }
    }
  }

  //assigning the east cucumber map to a 3rd map
  ProgramArr = Copy(StartArr);
  // movement of the south cucumbers
  for (let row = 0; row < NumberOfRows; row++) {
    for (let coloumn = 0; coloumn < NumberOfColoumn; coloumn++) {
      if (
        StartArr[row][coloumn] === 'v' &&
        StartArr[(row + 1) % NumberOfRows][coloumn] === '.'
      ) {
        ProgramArr[row][coloumn] = '.';
        ProgramArr[(row + 1) % NumberOfRows][coloumn] = 'v';
        Flag = false;
      }
    }
  }
  //console.log(ProgramArr);
}
console.log('Number of Attempts: ' + StepCounter);
