function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const characterMapS = new Map<string, number>();
	const characterMapT = new Map<string, number>();
	const length = s.length;

	for (let index = 0; index < length; index++) {
		if (!characterMapS.has(s.charAt(index))) {
			characterMapS.set(s.charAt(index), 0);
		}

		if (!characterMapT.has(t.charAt(index))) {
			characterMapT.set(t.charAt(index), 0);
		}

		characterMapS.set(s.charAt(index), characterMapS.get(s.charAt(index)) + 1);
		characterMapT.set(t.charAt(index), characterMapT.get(t.charAt(index)) + 1);
	}

	if (characterMapS.size !== characterMapT.size) {
		return false;
	}

	for (const [key, value] of characterMapS.entries()) {
		if (characterMapT.get(key) !== value) {
			return false;
		}
	}

	return true;
}

console.log(isAnagram('rat', 'car'));
