class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    if (nextNode !== null && nextNode.value === currentNode.value) {
      currentNode.next = nextNode.next;
    } else {
      currentNode = nextNode;
    }
  }

  return linkedList;
}
