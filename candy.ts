/**
 * Calculate minimum candy
 * @param ratings - List of children rating
 * @returns
 */
function candy(ratings: number[]): number {
	let minCandy = Array.from({ length: ratings.length }, (_, i) => 0);
	minCandy[0] = 1;

	for (let index = 1; index < ratings.length; index++) {
		if (ratings[index] > ratings[index - 1]) {
			minCandy[index] = minCandy[index - 1] + 1;
		} else {
			minCandy[index] = 1;
		}
	}

	for (let index = ratings.length - 2; index >= 0; index--) {
		if (ratings[index + 1] < ratings[index]) {
			minCandy[index] =
				minCandy[index] > minCandy[index + 1] ? minCandy[index] : minCandy[index + 1] + 1;
		}
	}

	return minCandy.reduce((preTotal, currentValue) => preTotal + currentValue);
}

console.log(candy([1, 3, 4, 5, 2]));
