function isIsomorphic(s: string, t: string): boolean {
	const mapS = new Map<string, number>();
	const mapT = new Map<string, number>();
	const length = s.length;

	for (let index = 0; index < length; index++) {
		if (!mapS.has(s.charAt(index)) && mapT.has(t.charAt(index))) {
			return false;
		}

		if (mapS.has(s.charAt(index)) && !mapT.has(t.charAt(index))) {
			return false;
		}

		if (mapS.has(s.charAt(index)) && mapT.has(t.charAt(index))) {
			if (mapS.get(s.charAt(index)) !== mapT.get(t.charAt(index))) {
				return false;
			}

			mapS.set(s.charAt(index), index);
			mapT.set(t.charAt(index), index);
		}

		if (!mapS.has(s.charAt(index))) {
			mapS.set(s.charAt(index), index);
		}

		if (!mapT.has(t.charAt(index))) {
			mapT.set(t.charAt(index), index);
		}
	}

	return true;
}

console.log(isIsomorphic('paper', 'title'));
