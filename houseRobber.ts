function rob(nums: number[]): number {
	const maxMoneyRobberAtHouse = [];
	let maxMoneyRobberPreviousHouse = 0;
	let maxMoneyRobber = 0;

	for (let i = 0; i < nums.length; i++) {
		// When the number of house < 3, the thief can only rob only 1 house
		if (i <= 1) {
			maxMoneyRobberAtHouse.push(nums[i]);
		} else {
			maxMoneyRobberAtHouse.push(maxMoneyRobberPreviousHouse + nums[i]);
		}

		// Update the max money the thief can rob at previous houses
		if (maxMoneyRobberPreviousHouse < maxMoneyRobberAtHouse[i - 1]) {
			maxMoneyRobberPreviousHouse = maxMoneyRobberAtHouse[i - 1];
		}

		// Update the max money the thief can rob
		if (maxMoneyRobber < maxMoneyRobberAtHouse[i]) {
			maxMoneyRobber = maxMoneyRobberAtHouse[i];
		}
	}
  
	return maxMoneyRobber;
}

console.log(rob([2,7,9,3,1]));
