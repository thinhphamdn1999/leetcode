/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.



Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.



Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

*/

// Time: O(n)
// Space: O(n)
function missingNumberUsingHashMap(nums: number[]): number {
	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		if (!map.has(nums[i])) {
			map.set(nums[i], 1);
		}
	}

	for (let i = 0; i < nums.length + 1; i++) {
		if (!map.has(i)) {
			return i;
		}
	}

	return -1;
}

// Time: O(n)
// Space: O(1)
// Stack overflow can happen if the numbers is too large
function missingNumberUsingSum(nums: number[]): number {
	const length = nums.length;
	let sum = (length * (length + 1)) / 2;

	for (let i = 0; i < length; i++) {
		sum -= nums[i];
	}

	return sum;
}

// Time: O(n)
// Space: O(1)
function missingNumberUsingXor(nums: number[]): number {
	let result = 0;

	for (let i = 0; i < nums.length; i++) {
		result = result ^ nums[i] ^ (i + 1);
	}

	return result;
}

console.log(missingNumberUsingXor([9, 6, 4, 2, 3, 5, 7, 8, 1]));
