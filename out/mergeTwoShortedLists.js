"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("./types/linkedList");
function mergeTwoLists(list1, list2) {
    let nodeOfList1 = list1;
    let nodeOfList2 = list2;
    let mergeList = null;
    if (nodeOfList1 && !nodeOfList2) {
        mergeList = new linkedList_1.ListNode(nodeOfList1.val);
        nodeOfList1 = nodeOfList1.next;
    }
    else if (nodeOfList2 && !nodeOfList1) {
        mergeList = new linkedList_1.ListNode(nodeOfList2.val);
        nodeOfList2 = nodeOfList2.next;
    }
    else if (nodeOfList1 && nodeOfList2) {
        if (nodeOfList1.val > nodeOfList2.val) {
            mergeList = new linkedList_1.ListNode(nodeOfList2.val);
            nodeOfList2 = nodeOfList2.next;
        }
        else {
            mergeList = new linkedList_1.ListNode(nodeOfList1.val);
            nodeOfList1 = nodeOfList1.next;
        }
    }
    let nodeMergeList = mergeList;
    while (nodeOfList1 || nodeOfList2) {
        if (nodeOfList1 && !nodeOfList2) {
            nodeMergeList.next = new linkedList_1.ListNode(nodeOfList1.val);
            nodeOfList1 = nodeOfList1.next;
        }
        else if (nodeOfList2 && !nodeOfList1) {
            nodeMergeList.next = new linkedList_1.ListNode(nodeOfList2.val);
            nodeOfList2 = nodeOfList2.next;
        }
        else if (nodeOfList1 && nodeOfList2) {
            if (nodeOfList1.val > nodeOfList2.val) {
                nodeMergeList.next = new linkedList_1.ListNode(nodeOfList2.val);
                nodeOfList2 = nodeOfList2.next;
            }
            else {
                nodeMergeList.next = new linkedList_1.ListNode(nodeOfList1.val);
                nodeOfList1 = nodeOfList1.next;
            }
        }
        nodeMergeList = nodeMergeList.next;
    }
    return mergeList;
}
const list1 = new linkedList_1.ListNode(1);
list1.next = new linkedList_1.ListNode(2);
list1.next.next = new linkedList_1.ListNode(4);
const list2 = new linkedList_1.ListNode(1);
list2.next = new linkedList_1.ListNode(3);
list2.next = new linkedList_1.ListNode(4);
console.log(mergeTwoLists(list1, list2).next.next);
//# sourceMappingURL=mergeTwoShortedLists.js.map