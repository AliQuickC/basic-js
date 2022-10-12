const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
	if (arr.length === 0) { // empty array
		return []
	}

	let controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
	let rezultArr = [];
	let delPrev = false;

	for (let i = 0; i < arr.length; i++) {
		switch (controlSequences.indexOf(arr[i])) {
			case -1: // not control sequences
				rezultArr.push(arr[i]);
				delPrev = false;
				break;
			case 0: // --discard-next
				if (i + 1 < arr.length) {
					i++;
					delPrev = true;
				}
				break;
			case 1: // --discard-prev
				if (!delPrev) {
					rezultArr.pop();
				}
				delPrev = false;
				break;
			case 2: // --double-next
				if (i + 1 < arr.length) {
					rezultArr.push(arr[i + 1]);
					delPrev = false;
				}
				break;
			case 3: // --double-prev
				if ((i - 1 >= 0) && !delPrev) {
					rezultArr.push(arr[i - 1]);
				}
				delPrev = false;
				break;
		}
	}

	return rezultArr;
}

module.exports = {
	transform
};
