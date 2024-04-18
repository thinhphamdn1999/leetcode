type RepeatCharacter = {
	[c: string]: number;
};

/**
 * Check if the string has unique sub string or not with the given length
 * @param str - the string
 * @param lengthOfSubString - length of subString
 * @returns
 */
function isValidUniqueString(str: string, lengthOfSubString: number): boolean {
	let valid = false;
	const repeatedCharacter: RepeatCharacter = {};
	let uniqueCharacters = 0;

	for (let index = 0; index < str.length; index++) {
		const character = str.charAt(index);

		// If repeatedCharacter did not existed, created one
		if (!repeatedCharacter[character]) {
			repeatedCharacter[character] = 0;
		}
		repeatedCharacter[character]++;

		if (repeatedCharacter[character] === 1) {
			uniqueCharacters++;
		}

		if (index >= lengthOfSubString) {
			repeatedCharacter[str.charAt(index - lengthOfSubString)]--;
			if (repeatedCharacter[str.charAt(index - lengthOfSubString)] === 0) {
				uniqueCharacters--;
			}
		}

		if (index >= lengthOfSubString - 1 && uniqueCharacters === lengthOfSubString) {
			valid = true;
		}
	}

	return valid;
}

function lengthOfLongestSubstring(s: string): number {
	let maxLength = 0;
	let begin = 1;
	let end = s.length;
	let mid = 0;

	while (begin <= end) {
		mid = Math.floor((begin + end) / 2);

		// Find the unique sub string length from the begin to end
		if (isValidUniqueString(s, mid)) {
			maxLength = mid;
			begin = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return maxLength;
}

// console.log(lengthOfLongestSubstring(' '));

/**
 * Using siding window algorithm
 * @param s
 * @returns
 */
function lengthOfLongestSubstringV2(s: string): number {
	if (s.length === 0) return 0;
	if (s.length === 1) return 1;
	const repeatedCharacter: RepeatCharacter = {};
	let maxLength = 0;

	let left = 0;
	let right = 0;

	while (right <= s.length - 1) {
		if (repeatedCharacter[s.charAt(right)] === undefined) {
			repeatedCharacter[s.charAt(right)] = 0;
		}

		if (repeatedCharacter[s.charAt(left)] === undefined) {
			repeatedCharacter[s.charAt(left)] = 0;
		}

		if (repeatedCharacter[s.charAt(right)] === 1) {
			while (repeatedCharacter[s.charAt(right)] === 1) {
				repeatedCharacter[s.charAt(left)] = 0;
				left++;
			}
		}

		repeatedCharacter[s.charAt(right)] = 1;
		maxLength = Math.max(maxLength, right - left + 1);
		right++;
	}

	return maxLength;
}

console.log(lengthOfLongestSubstringV2('abcadac'));
