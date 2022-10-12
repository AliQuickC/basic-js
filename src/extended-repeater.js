const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let additionStr = '' // additional string
	let rezStr = ''  // final string

	// form an additional string
	if (options.addition !== undefined) {
		options.addition = String(options.addition);
		options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
		options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

		additionStr += options.addition;
		for (let i = 2; i <= options.additionRepeatTimes; i++) {
			additionStr += options.additionSeparator + options.addition;
		}
	}

	// form the final string from an additional string
	let strS = String(str)
	options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
	options.separator = options.separator ? options.separator : '+';
	rezStr += strS + additionStr;
	for (let i = 2; i <= options.repeatTimes; i++) {
		rezStr += options.separator + strS + additionStr;
	}

	return rezStr;
}

module.exports = {
	repeater
};
