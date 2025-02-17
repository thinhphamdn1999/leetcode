// O(n*log(n))
function majorityElement(nums: number[]): number {
	nums.sort();
	return nums[Math.floor(nums.length / 2)];
}

// Time: O(n)
// Space: O(n)
function majorityElementWithHashmap(nums: number[]): number {
	const elementMap = new Map<number, number>();
	const length = nums.length;

	for (let i = 0; i < length; i++) {
		if (!elementMap.has(nums[i])) {
			elementMap.set(nums[i], 1);
		} else {
			elementMap.set(nums[i], elementMap.get(nums[i]) + 1);
		}
	}

	for (const element of elementMap) {
		if (element[1] > Math.floor(length / 2)) return element[0];
	}
}

// Time: O(n)
// Space: O(1)
function majorityElementWithMooreVotingAlgorithm(nums: number[]) {
	let count = 0;
	let candidate = 0;

	for (let i = 0; i < nums.length; i++) {
		if (count === 0) {
			candidate = nums[i];
		}

		if (nums[i] === candidate) {
			count++;
		} else {
			count--;
		}
	}

	return candidate;
}

console.log(majorityElementWithHashmap([2, 2, 1, 1, 1, 2, 2]));
