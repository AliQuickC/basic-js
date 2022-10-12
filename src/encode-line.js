const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let currentCharacter = "";
	let charCount = 0;
	let resultWord = "";

	for (let prop of str) {
		if (currentCharacter !== prop) {
			resultWord += (charCount > 1 ? charCount + currentCharacter : currentCharacter);
			currentCharacter = prop;
			charCount = 1;
		} else {
			charCount++;
		}
	}
	resultWord += charCount > 1 ? charCount + currentCharacter : currentCharacter;

	return resultWord;
}

module.exports = {
	encodeLine
};
