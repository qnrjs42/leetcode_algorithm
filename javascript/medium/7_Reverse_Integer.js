/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversedIntegers = String(x).split('').reverse();

  if (reversedIntegers[reversedIntegers.length - 1] === '-') {
    reversedIntegers.pop();
    reversedIntegers.unshift('-');
  }

  const result = Number(reversedIntegers.join(''));

  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;

  return result > min && result < max ? result : 0;
};
