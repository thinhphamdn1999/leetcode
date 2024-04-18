export type UniqueNumber = {
	[n: number]: number;
};

function removeDuplicates(nums: number[]): number {
	const uniqueNumber: UniqueNumber = {};
	const uniqueNumberArray = [];
	for (let index = 0; index < nums.length; index++) {
		const number = nums[index];
		if (!uniqueNumber[number]) {
			uniqueNumber[number] = 0;
		}

		uniqueNumber[number]++;

		if (uniqueNumber[number] === 1) {
			uniqueNumberArray.push(number);
		}
	}

	// Modify the nums array
	for (let index = 0; index < uniqueNumberArray.length; index++) {
		nums[index] = Number(uniqueNumberArray[index]);
	}

	console.log(uniqueNumberArray);

	return uniqueNumberArray.length;
}

removeDuplicates([-1, 0, 0, 0, 0, 3, 3]);

function removeDuplicatesV2(nums: number[]): number {
	let uniqueNumberLength = 1;

	for (let index = 1; index < nums.length; index++) {
		if (nums[index - 1] !== nums[index]) {
			nums[uniqueNumberLength] = nums[index];
			uniqueNumberLength++;
		}
	}  

	return uniqueNumberLength;
}

removeDuplicatesV2([-1, 0, 0, 0, 0, 3, 3]);
