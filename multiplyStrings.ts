/*
Given two non - negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
*/

function multiply(num1: string, num2: string): string {
	if (num1 === '0' || num2 === '0') return '0';

	const product = new Array(num1.length + num2.length).fill(0);

	for (let i = num1.length - 1; i >= 0; i--) {
		for (let j = num2.length - 1; j >= 0; j--) {
			const productIndex = i + j + 1;
			const sum = product[productIndex] + Number(num1[i]) * Number(num2[j]);
			product[productIndex] = sum % 10;
			product[productIndex - 1] += Math.floor(sum / 10);
		}
	}

	return product.join('').replace(/^0+/, '');
}
