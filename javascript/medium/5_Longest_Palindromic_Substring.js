/**
 * @param {string} s
 * @return {string}
 */
var another = function (s) {
  if (s.length <= 1) return s;

  let start = 0,
    maxLength = 0;

  function expandAroundCenter(left, right) {
    // 1, 1
    // 1, 2

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // 0, 2
      // -1, 3
      left--;
      right++;
    }
    // 3 +1 -1 = 3
    // 2 -1 -1 = 0
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // 3
    let len1 = expandAroundCenter(i, i); // 홀수 길이 팰린드롬
    // 0
    let len2 = expandAroundCenter(i, i + 1); // 짝수 길이 팰린드롬
    // 3
    let len = Math.max(len1, len2);

    // 3 > 1
    if (len > maxLength) {
      // 3
      maxLength = len;
      // 0 = 1 - ((3 - 1) / 2)
      start = i - Math.floor((len - 1) / 2);
    }
  }

  // 0, 3
  return s.substring(start, start + maxLength);
};

console.log(another('babad'));
