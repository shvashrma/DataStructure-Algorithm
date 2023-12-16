// implementing my array

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getArray = () => {
    return this.data;
  };

  getindex = (index) => {
    return this.data[index];
  };

  push = (data) => {
    this.data[this.length] = data;
    this.length++;
    return this.length;
  };

  pop = () => {
    delete this.data[this.length];
    this.length--;
    return this.length;
  };

  insert = (index, data) => {
    const lastItem = this.length - 1;
    for (let i = lastItem; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = data;
    this.length++;
  };

  delete = (index) => {
    const lastItem = this.length - 1;
    for (let i = index; i <= lastItem; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[lastItem];
    this.length--;
  };
}

const Array1 = new myArray();

Array1.push(3); // 0
Array1.push(4); // 1
Array1.push(5); // 2  => 4
Array1.push(6); // 3
Array1.push(7); // 4

Array1.insert(2,4);
Array1.insert(3,6)
Array1.insert(5,2)
Array1.insert(6,1)
Array1.insert(7,12)

Array1.delete(3)
Array1.delete(5)
Array1.delete(7)
console.log(Array1.getArray());
