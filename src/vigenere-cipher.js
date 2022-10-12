const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direct) {
		if (direct || typeof direct == "undefined") this.direct = true;
		else this.direct = false;

		this.tabulaRecta = []; // Vigenere table
		for (let j = 0; j < 26; j++) {
			this.tabulaRecta[j] = '';
			let alphabetCount = j;

			for (let i = 0; i < 26; i++) {
				if (alphabetCount === 26) { alphabetCount = 0; }
				this.tabulaRecta[j] = this.tabulaRecta[j] + String.fromCharCode(65 + alphabetCount);
				alphabetCount++;
			}
		}
	}

  encrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		let fullKey = this.fullKeyEncryption(key, message);

		let codeWord = '';
		for (let i = 0; i < message.length; i++) {
			let numberCodeString = fullKey[i].charCodeAt(0) - 65; // номер строки для кодирования

			let wordChar = message[i].toUpperCase();
			let numberWordChar = wordChar.charCodeAt(); // код текущего символа, кодируемого слова

			if (wordChar.charCodeAt() > 64 && wordChar.charCodeAt() < 91) {
				numberWordChar -= 65; // номер столбца(внутри строки) для текущего символа
				codeWord += this.tabulaRecta[numberCodeString][numberWordChar];
			} else {
				codeWord += message[i];
			}
		}

		if (!this.direct) {
			codeWord = codeWord.split("").reverse().join("");
		}

		return codeWord;
  }

  decrypt(encryptedMessage, key) {
		if (encryptedMessage === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		let arr = encryptedMessage.split(""),
			newArr = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== '"') {
				newArr.push(arr[i]);
			}
		}
		encryptedMessage = newArr.join("");

		let fullKey = this.fullKeyEncryption(key, encryptedMessage);

		let decodeWord = '';
		for (let i = 0; i < encryptedMessage.length; i++) {
			let wordChar = encryptedMessage[i].toUpperCase();

			if (wordChar.charCodeAt() > 64 && wordChar.charCodeAt() < 91) {
				let numberCodeString = fullKey[i].charCodeAt(0) - 65; // номер строки для декодирования

				let numberCodeChar = this.tabulaRecta[numberCodeString].indexOf(wordChar); // номер позиции в строке таблици,
				// на котором находится символ зашифрованного текста.

				numberCodeChar += 65; // номер декодированного символа
				decodeWord += String.fromCharCode(numberCodeChar);
			} else {
				decodeWord += encryptedMessage[i];
			}
		}

		if (!this.direct) {
			decodeWord = decodeWord.split("").reverse().join("");
		}

		return decodeWord;
  }

	fullKeyEncryption(key, word) {
		const length = word.length;
		let rezultString = '';
		let keyCount = 0;
		for (let i = 0; i < length; i++) {
			if (keyCount === key.length) {
				keyCount = 0;
			}

			if (word[i] === ' ') {
				rezultString += ' ';
			} else {
				rezultString += key[keyCount];
				keyCount++;
			}
		}

		rezultString = rezultString.toUpperCase()
		return rezultString;
	}
}

module.exports = {
  VigenereCipheringMachine
};
