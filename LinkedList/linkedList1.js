class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Linklist {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head),
      (this.length = 1);
  }

  printlist = () => {
    let array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };

  //   O(1)
  append = (value) => {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.length++;
    this.tail = newNode;
    this.printlist();
  };

  //   O(1)
  prepend = (value) => {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.printlist();
  };

  //   O(n)
  insert = (index, value) => {
    if (index >= this.length) {
      this.append(value);
    }

    const newNode = new Node(value);
    let leaderNode = this.transverse(index - 1);
    let holdingNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  };
  //   O(n)
  transverse = (index) => {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };
  //   O(n)
  remove = (index) => {
    let leaderNode = this.transverse(index - 1);
    let unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;
    this.length--;
  };
}

const list = new Linklist(1);

list.append(3);
list.append(7);
list.append(7);
list.append(9);
console.log(list.printlist());
list.remove(2);
console.log(list.printlist());

console.log(list);
