/*
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words. 

Example 1:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)

Example 2:
Input: "aba"
Output: True (permutations: "aba", "baa", etc.) 

Example 3:
Input: "ab"
Output: False (no permutations)
*/

function palindromePermutation(str: string): boolean {
	const charCount = new Map<string, number>();
	let oddCount = 0;

	// Count the characters
	for (let i = 0; i < str.length; i++) {
		const char = str[i].toLowerCase();
		// Skip spaces
		if (char === ' ') continue;

		if (charCount.has(char)) {
			charCount.set(char, charCount.get(char) + 1);
		} else {
			charCount.set(char, 1);
		}
	}

	// Check if there is only one odd count
	for (const count of charCount.values()) {
		if (count % 2 !== 0) {
			oddCount++;
		}
	}

	return oddCount <= 1;
}

console.log(palindromePermutation('aba')); // true
console.log(palindromePermutation('Tact boa')); // false
