class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //PUSH METHOD:
  push(val) {
    let n = new Node(val);
    if (!this.head) {
      this.head = n;
      this.tail = n;
      this.length++;
    } else {
      this.tail.next = n;
      this.tail = n;
      this.length++;
    }
    return this.length;
  }
  //POP METHOD:
  pop(val) {
    if (this.length === 1) {
      let v = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return v;
    } else if (this.length > 1) {
      let v = this.tail.val;
      let count = 1;
      let pointer = this.head;

      while (count !== this.length - 1) {
        pointer = pointer.next;
        count++;
      }
      pointer.next = null;
      this.tail = pointer;
      this.length--;
      return v;
    } else {
      return null;
    }
  }
  //SHIFT METHOD:
  shift() {
    if (this.length === 1) {
      let v = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return v;
    } else if (this.length > 1) {
      let v = this.head.val;
      let first_node = this.head;
      this.head.next = this.head;
      first_node = null;
      this.length--;
      return v;
    } else {
      return null;
    }
  }
  //UNSHIFT METHOD:
  unshift(val) {
    let n = new Node(val);
    if (!this.head) {
      this.head = n;
      this.tail = n;
      this.length++;
    } else {
      let headNode = this.head;
      this.head = n;
      this.head.next = headNode;
    }
    return this.length;
  }
  //GET METHOD:
  get(index) {
    if (index >= 1 && index <= this.length) {
      let pointer = this.head;
      for (let i = 1; i < index; i++) {
        pointer = pointer.next;
      }
      return pointer.val;
    } else {
      return undefined;
    }
  }
  //SET METHOD:
  set(index, val) {
    if (index >= 1 && index <= this.length) {
      let pointer = this.head;
      for (let i = 1; i < index; i++) {
        pointer = pointer.next;
      }
      pointer.val = val;
    } else {
      return undefined;
    }
  }
  //PRINT :
  print() {
    if (this.length > 0) {
      let str = "";
      let pointer = this.head;
      str += `${pointer.val}, `;
      for (let i = 1; i < this.length; i++) {
        pointer = pointer.next;
        if (i === this.length - 1) {
          str += `${pointer.val}`;
        } else {
          str += `${pointer.val}, `;
        }
      }
      console.log(str);
    } else {
      console.log("empty");
    }
  }
}
let my_list = new LinkList();
my_list.push(5);
my_list.push(6);
my_list.push(9);

//my_list.unshift(12);
//console.log(my_list.get(3));
// console.log(my_list.head.val);
// console.log(my_list.head.next.val);
//my_list.set(3, 15);

// console.log(my_list.head.next.next);
my_list.print();
