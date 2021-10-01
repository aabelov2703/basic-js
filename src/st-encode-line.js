import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let prev = str[0];
  let res = '';
  let cnt = 1;
  for (let i = 1; i < str.length; i++) {
    if (prev === str[i]) {
      cnt++
    }
    else {
      res = `${res}${cnt === 1 ? '' : cnt}${prev}`;
      cnt = 1;
      prev = str[i]
    }
  }
  return str === '' ? '' : `${res}${cnt === 1 ? '' : cnt}${prev}`;
}
