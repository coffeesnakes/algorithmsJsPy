/*
 * Input: 2 linked lists
 * Output: intersecting node or -1
 * Constraints: O(1) space
 * Edge cases: empty linked lists
 */
const findLinkedListIntersection = (list1, list2) => {
  // Return -1 if either list is empty
  // Get length of both lists
  // Remove the difference in length so both need to iterate the same
  // amount to reach intersection
  if (!list1.head || !list2.head) {
    return -1;
  }

  let difference = 0;
  let runner1 = null;
  let runner2 = null;
  let longList = null;
  let shortList = null;

  difference = getListLength(list1) - getListLength(list2);

  longList = difference > 0 ? list1 : list2;
  runner1 = longList.head;

  shortList = difference > 0 ? list2 : list1;
  runner2 = shortList.head;

  difference = Math.abs(difference);

  runner1 = getKthNode(runner1, difference);

  while (runner1 && runner1 !== runner2) {
    runner1 = runner1.next;
    runner2 = runner2.next;
  }

  return runner1 ? runner1 : -1;
};

const getListLength = (list) => {
  let length = 1;
  let runner = list.head;

  while (runner.next) {
    runner = runner.next;
    length++;
  }
  return length;
};

const getKthNode = (node, k) => {
  for (let i = 0; i < k; i++) {
    node = node.next;
  }
  return node;
};

export { findLinkedListIntersection };
