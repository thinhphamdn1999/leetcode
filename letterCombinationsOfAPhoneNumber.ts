const keyboard = {
	'2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz'
};

function recursion(result: string[], nextDigit: string, combinationMessage: string) {
	if (nextDigit.length === 0) {
		result.push(combinationMessage);
		return;
	}

	const letters = keyboard[nextDigit[0]];
	for (let letter of letters) {
		recursion(result, nextDigit.slice(1), combinationMessage + letter);
	}
}

function letterCombinations(digits: string): string[] {
	if (!digits) {
		return [];
	}

	const result: string[] = [];
	recursion(result, digits, '');

	return result;
}

console.log(letterCombinations('23'));
