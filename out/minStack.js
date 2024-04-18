class MinStack {
    constructor() {
        this.stack = [];
        this.minNumberStack = [];
        this.minNumber = Number.MAX_SAFE_INTEGER;
    }
    push(val) {
        this.stack.push(val);
        if (this.minNumber >= val) {
            this.minNumber = val;
            this.minNumberStack.push(this.minNumber);
        }
    }
    pop() {
        const removedNumber = this.stack.pop();
        if (this.minNumber === removedNumber) {
            this.minNumberStack.pop();
            this.minNumber =
                this.minNumberStack.length > 0
                    ? this.minNumberStack[this.minNumberStack.length - 1]
                    : Number.MAX_SAFE_INTEGER;
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
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
//# sourceMappingURL=minStack.js.map