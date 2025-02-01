/**
 * @param {string} s
 * @return {number}
 */
var another = function (s) {
  let left = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      // a
      // b
      // c
      // b
      // b
      charSet.delete(s[left]);
      left++;
    }

    // a X
    // b X
    // c X
    // a
    // b X
    // c
    // b X
    // b
    charSet.add(s[right]);
    // 7 - 5 + 1 = 3
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // 3
  return maxLength;
};

another('abcabcbb');
