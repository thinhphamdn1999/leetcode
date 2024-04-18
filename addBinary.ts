function addBinary(a: string, b: string): string {
	let largerBinaryNumber = a;
	let smallerBinaryNumber = b;
	let carriedSum = 0;
	let binarySum = '';

	if (a.length < b.length) {
		largerBinaryNumber = b;
		smallerBinaryNumber = a;
	}

	while (smallerBinaryNumber.length < largerBinaryNumber.length) {
		smallerBinaryNumber = '0' + smallerBinaryNumber;
	}

	for (let index = largerBinaryNumber.length - 1; index >= 0; index--) {
		const sum =
			Number.parseInt(largerBinaryNumber.charAt(index)) +
			Number.parseInt(smallerBinaryNumber.charAt(index)) +
			carriedSum;

		switch (sum) {
			case 0:
			case 1:
				carriedSum = 0;
				binarySum = sum.toString() + binarySum;
				break;
			case 2:
				carriedSum = 1;
				binarySum = '0' + binarySum;
				break;
			case 3:
				carriedSum = 1;
				binarySum = '1' + binarySum;
				break;
			default:
				break;
		}
	}

	if (carriedSum === 1) {
		return '1' + binarySum;
	}

	return binarySum;
}

console.log(addBinary('11', '1'));
