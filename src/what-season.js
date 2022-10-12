const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
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

	if (toString.call(date) == "[object Date]" // check object instance of class - "[object Date]"
		&& (date instanceof Date)              // check objeck instance of class - Date
		&& Object.keys(date).length === 0) {   // check if there are no extraneous keys in the object
		return months[date.getMonth()];
	} else {
		throw new Error('Invalid date!');
	}
}

module.exports = {
	getSeason
};
