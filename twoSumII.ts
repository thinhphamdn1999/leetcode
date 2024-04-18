function twoSumII(numbers: number[], target: number): number[] {
	let start = 0;
	let end = numbers.length - 1;

	while (start <= end) {
		if (numbers[start] + numbers[end] === target) {
			return [start + 1, end + 1];
		}

		if (numbers[start] + numbers[end] < target) {
			start++;
		} else {
			end--;
		}
	}

	return [start + 1, end + 1];
}

console.log(twoSumII([5, 25, 75], 100));
