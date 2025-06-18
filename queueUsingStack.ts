/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class Stack {
  stack: number[];
	constructor() {
		this.stack = [];
	}

	push(item: number) {
		return this.stack.push(item);
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.length - 1];
	}

	get length() {
		return this.stack.length;
	}

	isEmpty() {
		return this.length === 0;
	}
}

// Approach 1: Using 2 stacks
// Push: O(n), Pop/Peek/isEmpty: O(1)

class MyQueue {
  firstStack: Stack;
  secondStack: Stack;
	top: number;

	constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
	}

	// Time: O(n)
	// Space: O(n)
  enqueue(item: number) {
    // Save the first item of stack to top
    if (this.firstStack.isEmpty()) {
      this.top = item;
    }
		// Create the original stack
		while (!this.firstStack.isEmpty()) {
			this.secondStack.push(this.firstStack.pop());
		}

		this.secondStack.push(item);

		// Reverse the stack to maintain the order FIFO of a queue
		while (!this.secondStack.isEmpty()) {
			this.firstStack.push(this.secondStack.pop());
		}
	}

  dequeue() {
    const result = this.firstStack.pop();
    if (!this.firstStack.isEmpty()) {
      this.top = this.firstStack.peek();
    }

		return result;
	}

	peek() {
		return this.top;
  }
  
  isEmpty() {
    return this.firstStack.isEmpty();
  }
}

const test = new MyQueue();

test.enqueue(1);
test.enqueue(2);
test.peek();

console.log(test.peek());
