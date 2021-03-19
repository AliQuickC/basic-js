const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
                                  // number of disks, in turns per hour
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let numberOfTurns = (Math.pow(2, disksNumber) - 1); // minimum number of turns to solve the puzzle
  let secondsToSolve = Math.floor(3600 / turnsSpeed * numberOfTurns ); // seconds to solve the puzzle at a given turnsSpeed
  
  return {turns: numberOfTurns, seconds: secondsToSolve};
};
