function isSubsequence(s: string, t: string): boolean {
	let sIndex = 0;
	let tIndex = 0;

	while (tIndex < t.length) {
		if (s.charAt(sIndex) === t.charAt(tIndex)) {
			sIndex++;
		}

		tIndex++;
	}

	if (sIndex === s.length) {
		return true;
	}

	return false;
}

console.log(isSubsequence('acd', 'ahbgdc'));
