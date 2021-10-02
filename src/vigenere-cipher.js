import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
    this.latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  
  crypto(message, key, toCode = true) {
    if (!message || !key) throw new Error("Incorrect arguments!");
  
    let res = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let kInd = 0;
    message.split('').forEach((letter, index) => {
      if (this.latin.indexOf(letter) >= 0) {
        if (toCode) res.push(this.latin[(this.latin.indexOf(letter) + this.latin.indexOf(key[kInd])) % 26]);
        if (!toCode) res.push(this.latin[(this.latin.indexOf(letter) - this.latin.indexOf(key[kInd]) + 26) % 26]);
        kInd = kInd + 1 === key.length ? 0 : kInd + 1
      } else {
        res.push(letter);
      }
    })
    return this.mode ? res.join('') : res.reverse().join('')
  }

  encrypt(message, key) {
    return this.crypto(message, key);
  }
  
  decrypt(encryptedMessage, key) {
    return this.crypto(encryptedMessage, key, false);
  }
}
