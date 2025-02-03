/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const getRomanNumber = (str, answer = 0) => {
    if (!str) return answer;

    for (const [key, value] of Object.entries(romans)) {
      if (str.startsWith(key)) {
        return getRomanNumber(str.replace(key, ''), answer + value);
      }
    }
  };

  const result = getRomanNumber(s);

  return result;
};

var another = function (s) {
  let res = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      res -= roman[s[i]];
    } else {
      res += roman[s[i]];
    }
  }

  return res + roman[s[s.length - 1]];
};
