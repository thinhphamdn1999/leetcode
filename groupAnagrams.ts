function groupAnagrams(strs: string[]): string[][] {
	const sortedString = strs.map((str, index) => {
		return {
			key: index,
			value: str.split('').sort().join('')
		};
	});

	sortedString.sort(({ value: firstString }, { value: secondString }) =>
		firstString.localeCompare(secondString)
	);

	const result = [[strs[sortedString[0].key]]];

	for (let index = 1; index < sortedString.length; index++) {
		if (sortedString[index - 1].value === sortedString[index].value) {
			result[result.length - 1].push(strs[sortedString[index].key]);
		} else {
			result.push([strs[sortedString[index].key]]);
		}
	}

	return result;
}

console.log(groupAnagrams(["a"]));
