function validParentheses(s) {
    const stack = [];
    const length = s.length;
    let character = '';
    for (let index = 0; index < length; index++) {
        character = s.charAt(index);
        if (stack.length === 0) {
            stack.push(character);
            continue;
        }
        if ((character === ')' && stack[stack.length - 1] === '(') ||
            (character === ']' && stack[stack.length - 1] === '[') ||
            (character === '}' && stack[stack.length - 1] === '{')) {
            stack.pop();
            continue;
        }
        stack.push(character);
    }
    return stack.length === 0;
}
console.log(validParentheses(''));
//# sourceMappingURL=validParentheses.js.map