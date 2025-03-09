
// Problem: Search in Rotated Sorted Array II
// Source: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// Time Complexity: O(log n)
// Space Complexity: O(1)
// Worst Time Complexity: O(n) - If there are many duplicates, ex: [1, 1, 1, 1, 1, 1, 1, 1, 1, 13] - 13 is the target, it will have to go through all the elements
// Approach: Binary Search

function searchII(nums: number[], target: number): boolean {
	let left = 0;
	let right = nums.length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (nums[mid] === target) {
			return true;
		}

		// Skip duplicates
		// If left is equal to mid and mid is equal to right, skip
		if (nums[mid] == nums[left] && nums[mid] == nums[right]) {
			left++;
			right--;
		} else {
			// Check if left side is sorted
			if (nums[left] <= nums[mid]) {
				// Check if target is in the left side
				if (nums[left] <= target && target <= nums[mid]) {
					right = mid - 1;
				} else {
					// Target is in the right side
					left = mid + 1;
				}
			} else {
				// Right side is sorted
				// Check if target is in the right side
				if (nums[mid] <= target && target <= nums[right]) {
					left = mid + 1;
				} else {
					// Target is in the left side
					right = mid - 1;
				}
			}
		}

		mid = Math.floor((left + right) / 2);
	}

	return false;
}
