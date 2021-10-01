import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  const dnsStat = {}
  domains.forEach(item => {
    let subDom = `.${item.split('.').reverse().join('.')}`;
    while (subDom != '.') {
      if (Object.keys(dnsStat).includes(subDom)) dnsStat[subDom]++
      else dnsStat[subDom] = 1;
      subDom = '.' + subDom.split('.').slice(1,-1).join('.')
    }
  })
  return dnsStat
}
