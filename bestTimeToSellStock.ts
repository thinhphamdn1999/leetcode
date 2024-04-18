function maxProfit(prices: number[]): number {
  if (prices.length <= 1) {
    return 0;
  }

	let maxDiff = prices[1] - prices[0];
	let minNumber = prices[0];

	for (let index = 1; index < prices.length; index++) {
		if (minNumber > prices[index]) {
			minNumber = prices[index];
		}

		if (maxDiff < prices[index] - minNumber) {
			maxDiff = prices[index] - minNumber;
		}
	}

	return maxDiff;
}

console.log(maxProfit([1]));
