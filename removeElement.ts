function removeElement(nums: number[], val: number): number {
	const arrayWithoutVal = nums.filter((num) => num !== val);
	let arrayWithoutValLength = arrayWithoutVal.length;
	const result = arrayWithoutValLength;
	while (arrayWithoutValLength < nums.length) {
		arrayWithoutVal.push(val + 1);
		arrayWithoutValLength++;
	}

	console.log(arrayWithoutVal);

	return result;
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
