function intToRoman(num: number): string {
	const romanNumberMap = new Map<number, string>();
	romanNumberMap.set(1, 'I');
	romanNumberMap.set(5, 'V');
	romanNumberMap.set(10, 'X');
	romanNumberMap.set(50, 'L');
	romanNumberMap.set(100, 'C');
	romanNumberMap.set(500, 'D');
	romanNumberMap.set(1000, 'M');

	const stringNumber = num.toString().split('').reverse();

	let result = '';
	for (let index = 0; index < stringNumber.length; index++) {
		const number = Number(stringNumber[index]);
		if (number >= 5) {
			result =
				romanNumberMap.get(5 * Math.pow(10, index)) +
				Array.from({ length: number - 5 }, () => romanNumberMap.get(Math.pow(10, index))).join('') +
				result;
		} else {
			result =
				Array.from({ length: number }, () => romanNumberMap.get(Math.pow(10, index))).join('') +
				result;
		}
	}

	return result
		.replace('VIIII', 'IX')
		.replace('LXXXX', 'XC')
		.replace('DCCCC', 'CM')
		.replace('IIII', 'IV')
		.replace('XXXX', 'XL')
		.replace('CCCC', 'CD');
}

console.log(intToRoman(3749));
