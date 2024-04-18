function maxProfitII(prices: number[]): number {
	if (prices.length <= 1) {
		return 0;
	}

	let maxProfit = 0;
	let minNumber = prices[0];

	for (let index = 1; index < prices.length; index++) {
		if (prices[index] <= prices[index - 1]) {
			maxProfit += prices[index - 1] - minNumber;
			minNumber = prices[index];
		}

		if (index === prices.length - 1 && prices[index] > prices[index - 1]) {
			maxProfit += prices[index] - minNumber;
		}
	}

	return maxProfit;
}

console.log(maxProfitII([1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9]));
