class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addToHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  deleteFromHead() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const oldHead = this.head;
      this.head = null;
      this.tail = null;
      return oldHead;
    } else {
      const oldHead = this.head;
      this.head = oldHead.next;
      return oldHead;
    }
  }

  deleteFromTail() {
    let current = this.head;
    let oldTail = this.tail;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    return oldTail;
  }
}

export { LinkedList, Node };
