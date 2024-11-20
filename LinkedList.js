class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }


  append (value) {
    let newObj = new Node(value, null);
    if (!this.head) {
      this.head = newObj;
      return;
    }

    let tmp = this.head;

    while (tmp.next != null) {
      tmp = tmp.next;
    }
    tmp.next = newObj;
  }

  preppend (value) {
    let newObj = new Node(value, this);
    if (!this.head) {
      this.head = newObj;
      this.head.next = null;
      return;
    }
    newObj.next = this.head;
    this.head = newObj;

  }

  size () {
    let size = 1;
    let tmp = this.head;
    if (tmp == null) {
      return 0;
    }
    while (tmp.next != null) {
      tmp = tmp.next;
      ++size;
    }
    return size;
  }

  toString() {
    let tmp = this.head;
    if (tmp == null) {
      return "null";
    }
    let res = "";
    res += this.head.value;
    while (tmp.next != null) {
      tmp = tmp.next;
      res += ` -> ${tmp.value}`;
    }
    return res;
  }

  remove(index = 0) {
    if (index < 0 || index > this.size() - 1 || this.head == null) {
      return;
    }
    if (index == 0 && this.head != null) {
      this.head = this.head.next;
    } else {
      let tmp = this.head;
      let i = 0;

      while (i < index - 1) {
        tmp = tmp.next;
        ++i;
      }
      
      tmp.next = tmp.next.next;
    }
  }

  search (value) {
    let tmp = this.head;
    let res = "";
    let flag = 0;
    let i = 0;
    let endScopeCount = 0;
    while (tmp != null) {
      if (tmp.value == value) {
        flag = 1;
      }
      if (flag) {
        res += `Node { value: ${tmp.value}, next: `;
        ++endScopeCount;
      }
      tmp = tmp.next;
      ++i;
    }
    if (!res) {
      return null;
    }

    res += `null `;
    while (endScopeCount > 0) {
      res += "} ";
      --endScopeCount;
    }
    return res;
  }
  insert (value, index) {
    if (index < 0 || index > this.size()) {
      return;
    }

    if (index == 0) {
      this.preppend(value);
    } else if (index == this.size()) {
      this.append(value);
    } else {
      
      let tmp = this.head;
      let i = 0;
      while (i < index - 1) {
        tmp = tmp.next;
        ++i;
      }
      
      let newNode = new Node(value, tmp.next);
      tmp.next = newNode;
    }
    
  }
  reverse () {
    let res = new LinkedList;
    for (let i = this.size() - 1; i >= 0; --i) {
      let tmp = this.head;
      for (let j = 0; j < i; ++j) {
        tmp = tmp.next;
      }
      res.append(tmp.value);
    }
    this.head = res.head;
  }
  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }
  printList() {
    console.log(this + "");
    
  }
}


let obj = new LinkedList();
console.log(obj.isEmpty());


obj.append(1);
console.log(obj.isEmpty());


obj.append(2);
obj.append(3);
obj.insert(4, 1)

obj.insert(3, 2)
obj.preppend(2)
obj.preppend(8)
obj.preppend(9)
obj.remove(10)

obj.printList()

obj.reverse()
obj.printList()

console.log(obj.search(1))
console.log(obj.size());





