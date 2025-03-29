/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [3,3,3,3,3]
Output: 3
*/

function findDuplicateWithHashMap(nums: number[]): number {
  const map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return num;
    }

    map.set(num, 1);
  }

  return -1;
};

function findDuplicateWith2Pointers(nums: number[]) {
  let slow = nums[0];
  let fast = nums[0];

  // Find the intersection point of the two runners
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  // Find the entrance to the cycle
  let slow2 = nums[0];
  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return slow;
}

// Test cases
console.log(findDuplicateWith2Pointers([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicateWith2Pointers([3, 1, 3, 4, 2])); // Output: 3