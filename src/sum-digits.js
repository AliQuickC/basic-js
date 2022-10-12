const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	function summDigits(numb) {
		let numbSrt = (numb + "");

		if (numbSrt.length > 1) {

			let arrSum = 0;
			let arr = numbSrt.split("");

			for (let i = 0; i < arr.length; i++) {
				arrSum += +arr[i];
			}

			return summDigits(arrSum)
		} else { return numb; }
	}

	return summDigits(n);
}

module.exports = {
	getSumOfDigits
};
