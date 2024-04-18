function climbStairs(n: number): number {
	if (n === 1) {
		return 1;
	}

	if (n === 2) {
		return 2;
	}

	const steps = [1, 2];

	for (let floor = 3; floor <= n; floor++) {
		steps.push(steps[floor - 2] + steps[floor - 3]);
	}

	return steps[n - 1];
}

console.log(climbStairs(4));
