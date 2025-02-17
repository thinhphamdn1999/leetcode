/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from './types/linkedList';

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
	if (!node.next) {
		node = null;
		return;
	}

	node.val = node.next.val;
  node.next = node.next.next;
}

const linkedList = new ListNode(4);
linkedList.next = new ListNode(5);
linkedList.next.next = new ListNode(1);
linkedList.next.next.next = new ListNode(9);
deleteNode(linkedList.next);
console.log(linkedList);

