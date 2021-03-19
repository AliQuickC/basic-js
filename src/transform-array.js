const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw ("arr is not an Array");
  }

  controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let rezultArr = []
  let delPrev = false

  for (let i = 0; i < arr.length; i++) {
    switch (controlSequences.indexOf(arr[i])) {
      case -1: // not control sequences
        rezultArr.push(arr[i])
        delPrev = false
        break;
      case 0: // --discard-next
        if (i + 1 < arr.length) {
          i++
          delPrev = true
        }
        break;
      case 1: // --discard-prev
        if (!delPrev) {
          rezultArr.pop()
        }
        delPrev = false
        break;
      case 2: // --double-next
        if (i + 1 < arr.length) {
          rezultArr.push(arr[i + 1])
          delPrev = false
        }
        break;
      case 3: // --double-prev
        if ((i - 1 >= 0) && !delPrev) {
          rezultArr.push(arr[i - 1])
        }
        delPrev = false
        break;
    }
  }

  return rezultArr
};