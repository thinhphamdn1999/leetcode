class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function getNumber(linkedList) {
    let result = linkedList.val.toString();
    let nextNodeValue = linkedList.next;
    while (nextNodeValue !== null) {
        result = nextNodeValue.val.toString() + result;
        nextNodeValue = nextNodeValue.next;
    }
    return result;
}
function plusStringNumber(firstNumber, secondNumber) {
    let tempPlusValue = 0;
    let arrayLength = secondNumber.length;
    let resultPlus = '';
    // Add temp zero number at the beginning of the number has less digits
    let tempZero = Array.from({ length: Math.abs(firstNumber.length - secondNumber.length) }, () => '0').join('');
    if (firstNumber.length < secondNumber.length) {
        firstNumber = tempZero + firstNumber;
    }
    else {
        secondNumber = tempZero + secondNumber;
        arrayLength = firstNumber.length;
    }
    // Plus from last index digit to first index digit
    for (let index = arrayLength - 1; index >= 0; index--) {
        let plus = Number(firstNumber[index]) + Number(secondNumber[index]) + tempPlusValue;
        tempPlusValue = 0;
        if (plus >= 10) {
            tempPlusValue = Math.floor(plus / 10);
            plus = plus % 10;
        }
        resultPlus = plus.toString() + resultPlus;
    }
    // Add 1 at the beginning of result string
    if (tempPlusValue > 0) {
        resultPlus = '1' + resultPlus;
    }
    return resultPlus;
}
function addTwoNumbers(l1, l2) {
    let firstNumber = getNumber(l1);
    let secondNumber = getNumber(l2);
    const plus = plusStringNumber(firstNumber, secondNumber);
    const resultLinkNode = new ListNode();
    let node = resultLinkNode;
    const digits = plus.split('');
    console.log(digits);
    for (let index = digits.length - 1; index >= 0; index--) {
        node.val = Number(digits[index]);
        node.next = index === 0 ? null : new ListNode();
        node = node.next;
    }
    return resultLinkNode;
}
const firstLinkedList = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
const secondLinkedList = new ListNode(9, new ListNode(9, new ListNode(9)));
console.log(addTwoNumbers(firstLinkedList, secondLinkedList));
//# sourceMappingURL=addTwoNumber.js.map