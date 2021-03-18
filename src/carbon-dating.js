const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; // initial activities
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here  
    
  if(typeof(sampleActivity) !== "string") { return false; }
  if(isNaN(sampleActivity) || Number(sampleActivity) <= 0 ) { return false; }
  if(Number(sampleActivity) > MODERN_ACTIVITY) { return false; }

  // let k = (0.693 / HALF_LIFE_PERIOD) // rate constant for a first-order reaction
  // let NoN = Math.log(MODERN_ACTIVITY/sampleActivity) // N0/N - reaction rate 
  // let t = Math.log(NoN) / k; // elapsed time
    
  let rezult = Math.ceil(  Math.log( MODERN_ACTIVITY / sampleActivity ) / (0.693 / HALF_LIFE_PERIOD) );

  return  rezult;
};

