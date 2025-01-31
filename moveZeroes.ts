/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	if (nums.length === 1) {
		return;
	}

	let left = 0;
	let right = left + 1;
	const length = nums.length;

	while (left < length && right < length) {
		if (nums[left] !== 0) {
			left++;
			right++;
			continue;
		}

		if (nums[right] === 0) {
			right++;
			continue;
		}

		nums[left] = nums[right];
		nums[right] = 0;
		left++;
		continue;
	}

	console.log(nums);
}

moveZeroes([0, 1, 0, 3, 12]);
