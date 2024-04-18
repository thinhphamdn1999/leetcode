function isHappy(n: number): boolean {
	let stringNumber = n.toString();
	let sum = 0;
	let digit = 0;
	const numberMap = new Map<number, number>();

	while (sum !== 1) {
		for (let index = 0; index < stringNumber.length; index++) {
			digit = Number.parseInt(stringNumber.charAt(index));
			sum += digit * digit;
		}

		if (numberMap.has(sum) && sum === 1) {
			return true;
		}

		if (numberMap.has(sum) && sum !== 1) {
			return false;
		}

		if (!numberMap.has(sum)) {
			numberMap.set(sum, 1);
		}

		stringNumber = sum.toString();
		sum = 0;
	}
}

// Find all happy number from 1 to 729 (729 is the max sum of digits for 2^31 - 1)
function isHappyV2(n: number): boolean {
	let arr = new Set<number>([
		1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100, 103, 109, 129,
		130, 133, 139, 167, 176, 188, 190, 192, 193, 203, 208, 219, 226, 230, 236, 239, 262, 263, 280,
		291, 293, 301, 302, 310, 313, 319, 320, 326, 329, 331, 338, 356, 362, 365, 367, 368, 376, 379,
		383, 386, 391, 392, 397, 404, 409, 440, 446, 464, 469, 478, 487, 490, 496, 536, 556, 563, 565,
		566, 608, 617, 622, 623, 632, 635, 637, 638, 644, 649, 653, 655, 656, 665, 671, 673, 680, 683,
		694, 700, 709, 716
	]);
	let sum = 0;
	while (n > 0) {
		const digit = n % 10;
		sum += digit * digit;
		n = Math.floor(n / 10);
	}
	n = sum;
	return arr.has(n);
}

console.log(isHappy(1999999990));
