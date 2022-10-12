const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let rezult = 0;

	for (let i = 0; i < matrix[0].length; i++) { // iteration over columns
		for (let j = 0; j < matrix.length; j++) { // iteration over the rows
			if (matrix[j][i] !== 0) {
				rezult += matrix[j][i];
			} else { break; }
		}
	}

	return rezult;
}

module.exports = {
	getMatrixElementsSum
};
