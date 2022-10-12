const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let arrayForSort = [];
	let rezultArray = [];

	for (const iterator of arr) {
		iterator !== -1 ? arrayForSort.push(iterator) : iterator;
	}

	arrayForSort = arrayForSort.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	})

	let i = 0
	for (const iterator of arr) {
		if (iterator === -1) {
			rezultArray.push(iterator);
		} else {
			rezultArray.push(arrayForSort[i]);
			i++;
		}
	}

	return rezultArray;
}

module.exports = {
  sortByHeight
};
