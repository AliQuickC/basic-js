const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let resultMatrix = [];

	for (let j = 0; j < matrix.length; j++) {
		resultMatrix[j] = [];
		for (let i = 0; i < matrix[0].length; i++) {
			let summ = 0;
			resultMatrix[j][i] = 0;

			if (j - 1 >= 0) {
				if (i - 1 >= 0) {
					matrix[j - 1][i - 1] ? resultMatrix[j][i]++ : resultMatrix[j][i];
				}
				matrix[j - 1][i] ? resultMatrix[j][i]++ : resultMatrix[j][i];
				if (i + 1 < matrix[0].length) {
					matrix[j - 1][i + 1] ? resultMatrix[j][i]++ : resultMatrix[j][i];
				}
			}

			if (i - 1 >= 0) {
				matrix[j][i - 1] ? resultMatrix[j][i]++ : resultMatrix[j][i];
			}
			if (i + 1 < matrix[0].length) {
				matrix[j][i + 1] ? resultMatrix[j][i]++ : resultMatrix[j][i];
			}

			if (j + 1 < matrix.length) {
				if (i - 1 >= 0) {
					matrix[j + 1][i - 1] ? resultMatrix[j][i]++ : resultMatrix[j][i];
				}
				matrix[j + 1][i] ? resultMatrix[j][i]++ : resultMatrix[j][i];
				if (i + 1 <= matrix[0].length) {
					matrix[j + 1][i + 1] ? resultMatrix[j][i]++ : resultMatrix[j][i];
				}
			}
		}
	}

	return resultMatrix;
}

module.exports = {
	minesweeper
};
