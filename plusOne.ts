function plusOne(digits: number[]): number[] {
	const plusOneArr = [];
	let sum = digits[digits.length - 1] + 1;
	plusOneArr.push(sum % 10);
	let temp = Math.floor(sum / 10);

	for (let index = digits.length - 2; index >= 0; index--) {
		sum = digits[index] + temp;
		if (sum === 10) {
			temp = 1;
		} else {
			temp = 0;
		}

		plusOneArr.unshift(sum % 10);
	}

	if (temp === 1) plusOneArr.unshift(1);

	return plusOneArr;
}

console.log(plusOne([9, 9, 9, 9]));
