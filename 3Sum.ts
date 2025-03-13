/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

// Approach
// 1. Sort the array
// 2. Loop through the array
// 3. For each number, find the other two numbers that sum up to 0
// 4. Skip duplicates
// 5. Move pointers based on the sum
// 6. Return the result
// Time complexity: O(n^2)
// Space complexity: O(1)
function threeSum(nums: number[]): number[][] {
  // We need to sort the array first
  // This will help us to skip duplicates
  nums.sort((a, b) => a - b);

  const result: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates if the number is the same as the previous one (since we sorted the array)
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      const sum = 0 - nums[i];
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          result.push([nums[i], nums[low], nums[high]]);

          // Skip duplicates
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;

          // Move pointers
          low++;
          high--;
        } else if (nums[low] + nums[high] < sum) {
          // Move low pointer
          low++;
        } else {
          // Move high pointer
          high--;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]