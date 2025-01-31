/**
  정수 배열이 주어지면 nums다음을 찾으십시오.
  subarray
  가장 큰 합계를 구하고, 그 합계를 반환합니다.

  Example 1:
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.

  Example 2:
  Input: nums = [1]
  Output: 1
  Explanation: The subarray [1] has the largest sum 1.

  Example 3:
  Input: nums = [5,4,-1,7,8]
  Output: 23
  Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    max = Math.max(current, max);
  }

  return max;
};
