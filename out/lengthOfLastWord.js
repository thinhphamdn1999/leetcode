function lengthOfLastWord(s) {
    const formatString = s.trim();
    let lastWordLength = 0;
    for (let index = formatString.length; index >= 0; index--) {
        if (formatString.charAt(index).match(/[a-zA-z]/g)) {
            lastWordLength++;
        }
        if (formatString.charAt(index) === ' ') {
            return lastWordLength;
        }
    }
    return lastWordLength;
}
console.log(lengthOfLastWord("luffy is still joyboy"));
//# sourceMappingURL=lengthOfLastWord.js.map