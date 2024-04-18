import { ListNode } from './types/linkedList';

function hasCycle(head: ListNode | null): boolean {
	let slowNode = head;
	let fastNode = head?.next;

	while (slowNode && fastNode && fastNode?.next) {
		slowNode = slowNode?.next;
		fastNode = fastNode?.next?.next;

		if (slowNode === fastNode) {
			return true;
		}
	}

	return false;
}

const linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(0);
linkedList.next.next = new ListNode(-4);
linkedList.next.next.next = linkedList;

console.log(hasCycle(linkedList));
