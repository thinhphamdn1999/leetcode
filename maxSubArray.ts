function maxSubArray(nums: number[]): number {
	let maxSumAtIndex = nums[0];
	let maxSum = maxSumAtIndex;
	for (let i = 1; i < nums.length; i++) {
		maxSumAtIndex = Math.max(maxSumAtIndex + nums[i], nums[i]);
		maxSum = Math.max(maxSum, maxSumAtIndex);
	}

	return maxSum;
}

console.log(maxSubArray([5, 4, -1, 7, 8]));
