/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x);
  const reversedXs = str.split('').reverse().join('');

  return str === reversedXs;
};
