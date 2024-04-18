function canConstruct(ransomNote, magazine) {
    const characterMagazineMap = new Map();
    for (let index = 0; index < magazine.length; index++) {
        const magazineChar = magazine.charAt(index);
        if (characterMagazineMap.has(magazineChar)) {
            characterMagazineMap.set(magazineChar, characterMagazineMap.get(magazineChar) + 1);
        }
        else {
            characterMagazineMap.set(magazineChar, 1);
        }
    }
    for (let index = 0; index < ransomNote.length; index++) {
        const ransomNoteChar = ransomNote.charAt(index);
        if (!characterMagazineMap.has(ransomNoteChar)) {
            return false;
        }
        characterMagazineMap.set(ransomNoteChar, characterMagazineMap.get(ransomNoteChar) - 1);
        if (characterMagazineMap.get(ransomNoteChar) < 0) {
            return false;
        }
    }
    return true;
}
function canConstructV2(ransomNote, magazine) {
    let usedString = magazine;
    for (const letter of ransomNote) {
        if (!usedString.includes(letter)) {
            return false;
        }
        usedString = usedString.replace(letter, '');
    }
    return true;
}
console.log(canConstructV2('aa', 'aab'));
//# sourceMappingURL=ransomNote.js.map