const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
	let numberOfTurns = (Math.pow(2, disksNumber) - 1); // minimum number of turns to solve the puzzle
	let secondsToSolve = Math.floor(3600 / turnsSpeed * numberOfTurns); // seconds to solve the puzzle at a given turnsSpeed

	return { turns: numberOfTurns, seconds: secondsToSolve };
}

module.exports = {
	calculateHanoi
};
