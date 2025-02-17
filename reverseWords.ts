function reverseWords(s: string): string {
	const stringArray = s.split(' ').filter((item) => item !== '').reverse();

	return stringArray.join(' ');
}

console.log(reverseWords('  a good   example  '));
