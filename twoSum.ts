type seenNumberType = {
	[n: number]: number;
};

function twoSum(nums: number[], target: number): number[] {
	const seenNumber: seenNumberType = {};
	for (let index = 0; index < nums.length; index++) {
		let differentWithCurrentNumber = target - nums[index];
		if (seenNumber[differentWithCurrentNumber] !== undefined) {
			return [index, seenNumber[differentWithCurrentNumber]];
		}

		seenNumber[nums[index]] = index;
	}

	return [];
}

console.log(twoSum([1, 2, 3, 4, 5], 7));
