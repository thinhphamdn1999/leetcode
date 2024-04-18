function searchInsert(nums: number[], target: number): number {
	const length = nums.length;
	let left = 0;
	let right = length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (target > nums[mid]) {
			left = mid + 1;
		}
		if (target < nums[mid]) {
			right = mid - 1;
		}
		if (target === nums[mid]) {
			return mid;
		}
		mid = Math.floor((left + right) / 2);
	}

	return left;
}

console.log(searchInsert([1, 3, 5], 3));
