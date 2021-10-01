import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr ) {
  let res = [];
  let discardNext = false
  if (!Array.isArray(arr)) throw Error('\'arr\' parameter must be an instance of the Array!');
  arr.forEach((item, ind) => {
    switch (item) {
      case '--double-prev': 
        if (ind > 0 && arr[ind - 2] !== '--discard-next') res.push(arr[ind - 1]);
        break;
      case '--double-next': 
        if (arr[ind + 1] != undefined) res.push(arr[ind + 1]);
        break;
      case '--discard-prev': 
        if (arr[ind - 2] !== '--discard-next') res.pop();
        break;
      case '--discard-next':
        discardNext = true;
        break;
      default:
        if (!discardNext) res.push(item)
        discardNext = false;
    }
  })
  return res
}
