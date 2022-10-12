const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const rezultObj = {};

	for (const prop of domains) {
		const dns = prop.split(".").reverse();
		for (let i = 0; i < dns.length; i++) {
			let dnsStat = dns.slice(0, i + 1); // copy part array
			dnsStat = "." + dnsStat.join("."); // part array to string
			rezultObj[dnsStat] ? rezultObj[dnsStat]++ : rezultObj[dnsStat] = 1;
		}
	}

	return rezultObj;
}

module.exports = {
	getDNSStats
};
