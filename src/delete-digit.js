const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const arr = ("" + n).split("");
	let arrCopy = arr.slice();
	arrCopy.splice(0, 1);
	let largest = Number(arrCopy.join(""));

	for (let i = 1; i < arr.length; i++) {
		arrCopy = arr.slice();
		arrCopy.splice(i, 1);
		const element = Number(arrCopy.join(""));
		element > largest ? largest = element : largest;
	}

	return largest;
}

module.exports = {
	deleteDigit
};
