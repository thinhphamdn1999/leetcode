function longestCommonPrefix(strs: string[]): string {
  let result = '';
  let tmp = '';

  for (let firstStringIndex = 0; firstStringIndex <= strs[0].length; firstStringIndex++) {
    result = strs[0].slice(0, firstStringIndex);

    for (let index = 1; index < strs.length; index++) {
      tmp = strs[index].slice(0, firstStringIndex);
      if (result !== tmp) {
        return result.slice(0, firstStringIndex - 1);
      }
    }

  }

  return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
