const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!Array.isArray(members)) { return false; } // if the input parameter is not an array

	return members.map((item, i, arr) => {
		if (typeof (item) !== "string") { return '' } // if Name is not a string
		if (item[0] != ' ') {                        // the first character is not a space
			return item[0].toUpperCase()
		}
		else {
			let name = item.split("") // turns the name into an array of characters
			for (let i = 0; i < name.length; i++) { // looking for the first character of a string that is not a space
				if (name[i] != ' ') {
					return name[i].toUpperCase()
				}
			}
		}
	}).sort().join("");
}

module.exports = {
	createDreamTeam
};
