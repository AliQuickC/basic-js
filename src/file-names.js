const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let outFileList = [];

	for (const iterator of names) {
		if (outFileList.indexOf(iterator) === -1) { // file with this name does not exist
			outFileList.push(iterator);
		} else {
			let i = 1;
			while (1) {
				if (outFileList.indexOf(iterator + "(" + i + ")") === -1) {
					outFileList.push(iterator + "(" + i + ")");
					break;
				}
				i++;
			}
		}
	}

	return outFileList;
}

module.exports = {
	renameFiles
};
