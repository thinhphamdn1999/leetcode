function search(nums: number[], target: number): boolean {
	let left = 0;
	let right = nums.length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (nums[mid] === target) {
			return true;
		}

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

		mid = Math.floor((left + right) / 2);
	}

	return false;
}

console.log(search([1, 2, 3, 4], 2)); // true
