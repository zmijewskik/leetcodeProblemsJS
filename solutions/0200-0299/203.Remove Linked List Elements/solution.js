/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head

  // if head is val to delete and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
  while (head) {
    if (head.val === val) {
      head = head.next
    } else {
      break
    }
  }

  // skip any nodes whos values match the parameters and set it to the node after
  // if the node is found, set curr.next to the node after it then try again
  // otherwise iterate forward
  let current = head
  while (current && current.next) {
    if (current.next.val === val) current.next = current.next.next
    else current = current.next
  }

  return head
}
