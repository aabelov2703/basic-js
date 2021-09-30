import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let additionalArr = [];
  let addRepeat = options.additionRepeatTimes || (options.addition === undefined ? 0 : 1);
  let addSeparator = options.additionSeparator || '';
  for (let i = 0; i < addRepeat; i++) additionalArr.push(options.addition || (options.addition === null ? 'null' : (typeof options.addition === 'boolean' ? false : '')));

  let resArr = [];
  let resStr = str + additionalArr.join(addSeparator|| '|');
  let repeat = options.repeatTimes || 0;
  let separator = options.separator || (addSeparator === '' ? '+' : '');
  for (let i = 0; i < repeat; i++) resArr.push(resStr || '');

  return repeat === 0 ? resStr : resArr.join(separator || '+');
}
