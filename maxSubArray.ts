/**
 * Find max sum sub array
 * @param nums - list numbers
 * @returns
 */
function maxSubArray(nums: number[]): number {
	let maxSumAtIndex = nums[0];
	let maxSum = maxSumAtIndex;

	for (let i = 1; i < nums.length; i++) {
		maxSumAtIndex = Math.max(maxSumAtIndex + nums[i], nums[i]);
		maxSum = Math.max(maxSum, maxSumAtIndex);
	}

	return maxSum;
}

/**
 * Find max sum subsequence array
 * @param nums - list numbers
 * @returns 
 */
function maxSubsequenceArray(nums: number[]): number {
	let largestNegativeNumber = -Infinity;
	let maxSubsequence = 0;
	let isNonNegativeNumber = false;

	for (let i = 0; i < nums.length; i++) {
		if (largestNegativeNumber < nums[i] && nums[i] < 0) {
			largestNegativeNumber = nums[i];
		}

		if (nums[i] >= 0) {
			isNonNegativeNumber = true;
			maxSubsequence += nums[i];
		}
	}

	return isNonNegativeNumber ? maxSubsequence : largestNegativeNumber;
}

console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubsequenceArray([-1, -2, -1, -3, -7]));
