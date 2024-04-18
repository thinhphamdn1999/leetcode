/**
 * Solve this with O(n) space and O(1) time
 */
class RandomizedSet {
	valueMap: Map<number, number>;
	valueArray: Array<number>;

	constructor() {
		this.valueMap = new Map();
		this.valueArray = [];
	}

	insert(val: number): boolean {
		const foundValue = this.valueMap.has(val);

		if (foundValue) {
			return false;
		}

		this.valueMap.set(val, this.valueArray.length);
		this.valueArray.push(val);

		return true;
	}

	remove(val: number): boolean {
		const foundValue = this.valueMap.has(val);

		if (!foundValue) {
			return false;
		}

		const removeIndex = this.valueMap.get(val);
		this.valueMap.delete(val);
		this.valueArray[removeIndex] = this.valueArray[this.valueArray.length - 1];
		this.valueArray.pop();
		this.valueMap.set(this.valueArray[removeIndex], removeIndex);

		return true;
	}

	getRandom(): number {
		const randomIndex = Math.floor(Math.random() * this.valueArray.length);

		return this.valueArray[randomIndex];
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const randomizedSet = new RandomizedSet();

console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(0));
