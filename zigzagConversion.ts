function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

	const zigzagArray = Array.from({ length: numRows }, () => []);

	let addingVerticalTimes = 0;
	let diagonal = 0;
	for (let i = 0; i < s.length; i++) {
		if (addingVerticalTimes === numRows && diagonal === numRows - 2) {
			addingVerticalTimes = 0;
			diagonal = 0;
		}

		if (addingVerticalTimes < numRows) {
			zigzagArray[addingVerticalTimes].push(s[i]);
			addingVerticalTimes++;
			continue;
		}

		if (diagonal < numRows - 2) {
			zigzagArray[numRows - diagonal - 2].push(s[i]);
			diagonal++;
			continue;
		}
	}

	let zigzagString = '';
  for (let i = 0; i < zigzagArray.length; i++) {
    for (let j = 0; j < zigzagArray[i].length; j++) {
      zigzagString += zigzagArray[i][j]
    }
  }

	return zigzagString;
}

console.log(convert('ABCD', 2));
