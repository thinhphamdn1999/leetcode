class MinStack {
	stack: Array<number>;
	minNumberStack: Array<number>;
	minNumber: number;

	constructor() {
		this.stack = [];
		this.minNumberStack = [];
		this.minNumber = Number.MAX_SAFE_INTEGER;
	}

	push(val: number): void {
		this.stack.push(val);
		if (this.minNumber >= val) {
			this.minNumber = val;
			this.minNumberStack.push(this.minNumber);
		}
	}

	pop(): void {
		const removedNumber = this.stack.pop();
		if (this.minNumber === removedNumber) {
			this.minNumberStack.pop();
			this.minNumber =
				this.minNumberStack.length > 0
					? this.minNumberStack[this.minNumberStack.length - 1]
					: Number.MAX_SAFE_INTEGER;
		}
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minNumberStack[this.minNumberStack.length - 1];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
