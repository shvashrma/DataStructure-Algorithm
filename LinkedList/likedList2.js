class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class linkList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  printList = () => {
    let array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };

  append = (value) => {
    const NewNode = new Node(value);
    this.tail.next = NewNode;
    this.tail = NewNode;
    this.length++;
    this.printList();
  };

  prepend = (value) => {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.printList();
  };

  insert = (index, value) => {
    const newNode = new Node(value);
    const leaderNode = this.transverse(index - 1);
    const holdingNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
    this.printList();
  };

  transverse = (index) => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };

  remove = (index) => {
    const leaderNode = this.transverse(index - 1);
    const unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;
    this.length--;
    this.printList()
  };
}

const list = new linkList(10)
list.append(20)
list.append(60)
list.append(30)
list.append(40)
list.append(50)
console.log(list.printList())
list.remove(3)
console.log(list.printList())

// console.log(list)

