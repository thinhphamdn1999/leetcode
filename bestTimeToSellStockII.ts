/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve. 
*/

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
