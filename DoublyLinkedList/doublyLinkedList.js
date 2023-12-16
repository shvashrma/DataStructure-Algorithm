class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class doublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    (this.tail = this.head), (this.length = 1);
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
    const newNode = new Node(value);
    this.head.next = newNode;
    newNode.prev = this.head;
    this.tail = newNode;
    this.length++;
    return this.printList();
  };

  prepend = (value) => {
    const newNode = new Node(value);
    (newNode.prev = null),
      (newNode.next = this.head),
      (this.head.prev = newNode);
    this.head = newNode;
    this.length++;
    return this.printList();
  };

  insert = (index, value) => {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let leaderNode = this.traverse(index - 1);
    let followingNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = followingNode;
    followingNode.prev = newNode;
    this.length++;
    return this.printList();
  };

//   ------> Getting error in this function <------

//   remove = (index) => {
//     let leaderNode = this.traverse(index);
//     let unwantedNode = leaderNode.next
//     let followingNode = unwantedNode.next
//     leaderNode.next = followingNode
//     this.length--
//     return this.printList()
//   };

  traverse = (index) => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };
}

const doubleList = new doublyLinkedList(1);

doubleList.append(2);
doubleList.prepend(3);
doubleList.insert(2, 4);
doubleList.remove(1);
doubleList.remove(1);
console.log(doubleList.printList());
console.log(doubleList);
