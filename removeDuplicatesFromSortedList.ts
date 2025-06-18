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

/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * 
 
Input: head = [1,1,2]
Output: [1,2]


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */

import { ListNode } from './types/linkedList';

function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) {
		return head;
	}

	let firstNode = head;
	let secondNode = head.next;

	while (firstNode !== null && secondNode !== null) {
		if (firstNode.val === secondNode.val) {
			firstNode.next = secondNode.next;
			secondNode = secondNode.next;
		} else {
			firstNode = firstNode.next;
			secondNode = secondNode.next;
		}
	}

	return head;
}

const list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(list));
