class Node {
	val: number;
	next: Node | null;
	random: Node | null;

	constructor(val?: number, next?: Node, random?: Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

function deepClone(obj, hash = new WeakMap()) {
	// Do not try to clone primitives or functions
	if (Object(obj) !== obj || obj instanceof Function) return obj;
	if (hash.has(obj)) return hash.get(obj); // Cyclic reference
	try {
		// Try to run constructor (without arguments, as we don't know them)
		var result = new obj.constructor();
	} catch (e) {
		// Constructor failed, create object without running the constructor
		result = Object.create(Object.getPrototypeOf(obj));
	}
	// Optional: support for some standard constructors (extend as desired)
	if (obj instanceof Map)
		Array.from(obj, ([key, val]) => result.set(deepClone(key, hash), deepClone(val, hash)));
	else if (obj instanceof Set) Array.from(obj, (key) => result.add(deepClone(key, hash)));
	// Register in hash
	hash.set(obj, result);
	// Clone and assign enumerable own properties recursively
	return Object.assign(
		result,
		...Object.keys(obj).map((key) => ({ [key]: deepClone(obj[key], hash) }))
	);
}

export default function copyRandomList(head: Node | null): Node | null {
	return deepClone(head);
}
