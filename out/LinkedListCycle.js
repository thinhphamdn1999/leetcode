"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("./types/linkedList");
function hasCycle(head) {
    var _a;
    let slowNode = head;
    let fastNode = head === null || head === void 0 ? void 0 : head.next;
    while (slowNode && fastNode && (fastNode === null || fastNode === void 0 ? void 0 : fastNode.next)) {
        slowNode = slowNode === null || slowNode === void 0 ? void 0 : slowNode.next;
        fastNode = (_a = fastNode === null || fastNode === void 0 ? void 0 : fastNode.next) === null || _a === void 0 ? void 0 : _a.next;
        if (slowNode === fastNode) {
            return true;
        }
    }
    return false;
}
const linkedList = new linkedList_1.ListNode(1);
linkedList.next = new linkedList_1.ListNode(2);
linkedList.next.next = new linkedList_1.ListNode(0);
linkedList.next.next = new linkedList_1.ListNode(-4);
linkedList.next.next.next = linkedList;
console.log(hasCycle(linkedList));
//# sourceMappingURL=LinkedListCycle.js.map