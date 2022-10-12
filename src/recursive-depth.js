const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	constructor() {
		this.level = 0;  // current depth level
		this.maxLevel = 0; // depth record
	}

	calculateDepth(arr) {
		if (this.level == 0 && !Array.isArray(arr)) { // check before recursion starts, if the function parameter is not an array
			return 0;
		}

		this.level++ // depth one level down
		this.maxLevel < this.level ? this.maxLevel = this.level : this.maxLevel; // checking for a new depth record

		arr.forEach(element => {
			if (Array.isArray(element)) {
				this.calculateDepth(element); // recursive function call
			}
		});

		this.level--; // depth one level up
		if (this.level == 0) { // if we go up to level 0, clear the data before exiting the last recursion call
			let rezult = this.maxLevel;
			this.level = this.maxLevel = 0;
			return rezult;
		}
		return this.maxLevel;
	}
}

module.exports = {
	DepthCalculator
};
