function isPalindrome(s: string): boolean {
	const input = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
	const length = input.length;

	for (let index = 0; index < Math.floor(length / 2); index++) {
		if (input.charAt(index) !== input.charAt(length - 1 - index)) {
			return false;
		}
	}

	return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
