function romanToInt(s: string): number {
	let result = 0;
	const romanNumberMap = new Map<string, number>();
	romanNumberMap.set('I', 1);
	romanNumberMap.set('V', 5);
	romanNumberMap.set('X', 10);
	romanNumberMap.set('L', 50);
	romanNumberMap.set('C', 100);
	romanNumberMap.set('D', 500);
	romanNumberMap.set('M', 1000);

	const romanNum = s
		.replace('IV', 'IIII')
		.replace('IX', 'VIIII')
		.replace('XL', 'XXXX')
		.replace('XC', 'LXXXX')
		.replace('CD', 'CCCC')
		.replace('CM', 'DCCCC');

	for (let index = romanNum.length - 1; index >= 0; index--) {
		result = result + romanNumberMap.get(romanNum.charAt(index));
	}

	return result;
}

function romanToIntV2(s: string): number {
	let result = 0;
	let value = 0;
	let oldValue = 0;
	const romanNumberMap = new Map<string, number>();
	romanNumberMap.set('I', 1);
	romanNumberMap.set('V', 5);
	romanNumberMap.set('X', 10);
	romanNumberMap.set('L', 50);
	romanNumberMap.set('C', 100);
	romanNumberMap.set('D', 500);
	romanNumberMap.set('M', 1000);

	for (let index = s.length - 1; index >= 0; index--) {
		value = romanNumberMap.get(s.charAt(index));
		if (result > value) {
			result -= value;
		} else {
			result += value;
		}
		oldValue = value;
	}

	return result;
}

console.log(romanToIntV2('XLIV'));
