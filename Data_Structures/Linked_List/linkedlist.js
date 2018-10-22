/* Singly Linked List - Class Pattern */

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  /* Insertion − Adds an element at the beginning of the list.

  Deletion − Deletes an element at the beginning of the list.
  
  Display − Displays the complete list.
  
  Search − Searches an element using the given key. 
  
  Delete − Deletes an element using the given key. */

  insertHead(node) {
    this.head = node;
  }

  deleteHead() {
    const removedHead = this.head;
    this.head = removedHead.next;
    return removedHead;
  }

  display() {
    let output = "";
    let currentNode = this.head;
    while (currentNode) {
      output += `${currentNode.value}`;
      if (currentNode.next) output += " --> ";
      currentNode = currentNode.next;
    }
    return output;
  }
}

class Node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}

const example = new SinglyLinkedList();
example.insertHead(new Node(1));
example.insertHead(new Node(2, example.head));
example.insertHead(new Node(3, example.head));

console.log(example.display());
