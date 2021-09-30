import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = String(n).slice(1);
  for (let i = 1; i < String(n).length; i++) {
    if (max < String(n).replace(String(n)[i], '')) max = String(n).replace(String(n)[i], '')
  }
  return +max
}
