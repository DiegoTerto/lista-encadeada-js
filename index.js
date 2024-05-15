class Node {
  constructor(color, priority) {
    this.color = color;
    this.priority = priority;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertWithPriority(color, priority) {
    let newNode = new Node(color, priority);

    if (!this.head || this.head.priority > newNode.priority) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next && current.next.priority <= newNode.priority) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  show() {
    let current = this.head;
    while (current) {
      console.log(current.color);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.insertWithPriority("Vermelho", 1);
list.insertWithPriority("Verde", 4);
list.insertWithPriority("Azul", 3);
list.insertWithPriority("Amarelo", 2);

list.display();
