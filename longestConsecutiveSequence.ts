/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

  Example 1:
  Input: nums = [100,4,200,1,3,2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

  Example 2:
  Input: nums = [0,3,7,2,5,8,4,6,0,1]
  Output: 9

  Example 3:
  Input: nums = [1,0,1,2]
  Output: 3
*/

// Solution 1
// Time complexity: O(nlogn)
// Space complexity: O(1)
function longestConsecutiveWithSort(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    let longestStreak = 1;
    let currentStreak = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                currentStreak++;
            } else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    }
    return Math.max(longestStreak, currentStreak);
};

// Solution 2
// Time complexity: O(n)
// Space complexity: O(n)
function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let longestStreak = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};

console.log(longestConsecutiveWithSort([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutiveWithSort([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutiveWithSort([1, 0, 1, 2])); // 3
console.log(longestConsecutiveWithSort([1, 2, 0, 1])); // 3
console.log(longestConsecutiveWithSort([1, 2, 0, 1, 2])); // 3