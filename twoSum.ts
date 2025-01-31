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

function twoSum2(nums: number[], target: number) {
	const numberMap = new Map<number, number>();
	let minusNumber: number;

	for (let index = 0; index < nums.length; index++) {
		minusNumber = target - nums[index];
		if (numberMap.has(minusNumber)) {
			return [index, numberMap.get(minusNumber)];
		}

		numberMap.set(nums[index], index);
	}
}

console.log(twoSum2([1, 2, 3, 4, 5], 7));
