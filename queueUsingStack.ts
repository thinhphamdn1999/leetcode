/**
 * Create 2 stacks:
 * 1. The first one is used for read operation like push (or enqueue)
 * 2. The second is used for write operation like pop (or dequeue)
 */
class MyQueue {
	firstStack: number[];
	secondStack: number[];

	constructor() {
		this.firstStack = [];
		this.secondStack = [];
	}

	push(x: number): void {
		const length = this.firstStack.length;
		for (let i = 0; i < length; i++) {
			this.secondStack.push(this.firstStack.pop());
		}

		this.secondStack.push(x);
	}

	pop(): number {
		const length = this.secondStack.length;

		for (let i = 0; i < length; i++) {
			this.firstStack.push(this.secondStack.pop());
		}

		return this.firstStack.pop();
	}

	peek(): number {
		if (this.firstStack.length > 0) {
			return this.firstStack[this.firstStack.length - 1];
		}

		return this.secondStack[0];
	}

	empty(): boolean {
		return this.firstStack.length === 0 && this.secondStack.length === 0;
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
