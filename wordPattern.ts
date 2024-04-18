function wordPattern(pattern: string, s: string): boolean {
	const words = s.trim().split(' ');
	if (words.length !== pattern.length) return false;
	const wordMap = new Map<string, string>();
	const charMap = new Map<string, string>();

	for (let index = 0; index < pattern.length; index++) {
		const char = pattern.charAt(index);
		const word = words[index];

		if (wordMap.has(char) && word !== wordMap.get(char)) {
			return false;
		}

		if (charMap.has(word) && char !== charMap.get(word)) {
			return false;
		}

		wordMap.set(char, word);
		charMap.set(word, char);
	}

	return true;
}

console.log(wordPattern('abba', 'dog dog dog dog'));
