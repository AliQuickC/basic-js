const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const months = [];
  months[0] = 'winter'
  months[1] = 'winter'
  months[2] = 'spring'
  months[3] = 'spring'
  months[4] = 'spring'
  months[5] = 'summer'
  months[6] = 'summer'
  months[7] = 'summer'
  months[8] = 'autumn'
  months[9] = 'autumn'
  months[10] = 'autumn'
  months[11] = 'winter'

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw ("variable is not an instance of a date object");
  }

  if (toString.call(date) == "[object Date]") {
    return months[date.getMonth()];
  } else {
    throw ("Date object received in the wrong format");
  }
};