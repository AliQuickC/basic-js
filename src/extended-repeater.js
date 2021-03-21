const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here  
  let additionStr = '' // additional string
  let rezStr = ''  // final string
  
  // form an additional string
  if (options.addition !== undefined) {
    options.addition = String(options.addition)
    options.additionRepeatTimes =  options.additionRepeatTimes ?  options.additionRepeatTimes : 1  
    options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
    
    additionStr += options.addition
    for (let i = 2; i <= options.additionRepeatTimes; i++) {
      additionStr += options.additionSeparator + options.addition
    }
  }
    
  // form the final string from an additional string
  strS = String(str)
  options.repeatTimes =  options.repeatTimes ?  options.repeatTimes : 1
  options.separator = options.separator ? options.separator : '+'
  rezStr += strS + additionStr
  for (let i = 2; i <= options.repeatTimes; i++) {
    rezStr += options.separator + strS + additionStr
  }
    
  return rezStr  
};
  