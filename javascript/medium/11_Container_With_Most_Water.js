function another(height) {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;

  // 0 < 8
  // 1 < 8

  // 1 < 6
  while (left < right) {
    // 8
    // 7

    // 5
    let width = right - left;
    // 1 = 1, 7
    // 7 = 8, 7

    // 8 = 8, 8
    let minHeight = Math.min(height[left], height[right]);
    // 8 = 8 * 1
    // 49 = 7 * 7

    // 40 = 5 * 8
    let area = width * minHeight;
    // 8 = 0, 8
    // 49 = 8, 49

    // 49 = 49, 40
    maxArea = Math.max(maxArea, area);

    // 1 < 7
    // 8 < 7
    // 낮은 막대를 이동시켜야 최대 넓이를 증가시킬 가능성이 있음
    if (height[left] < height[right]) {
      // 1
      left++;
    } else {
      // 7
      right--;
    }
  }

  return maxArea;
}

console.log(another([1, 8, 6, 2, 5, 4, 8, 3, 7]));
