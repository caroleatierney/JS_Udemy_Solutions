// node stores a value and a reference

class Node{
  constructor(val){
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - -            PUSH             - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // push: insert at end
  // accepts a valueed in
  // adds to NewSinglyLinkedList
  // first thing is to see if there is a head property, if not set head and tail to new node
  // else set next property on tail to be new node
  // increment length by 1
  push(val){
    var newNode = new Node(val)  // make a new Node
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode  // set current tail to new node
      this.tail = newNode       // set tail of new node to new node
    }
    this.length++;
    return this;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - -             POP             - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // go through list from beginning
    // if no nodes, return undefined
    // extra variable pre (second to last node)
    // if current.next = tail, set current to null, set tail to current, decrement count
    // return node
    // if tail.next = null
    pop(val){
      if (!this.head) return undefined;
      var current = this.head;
      var newTail = current;
      while(current.next){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return current;
      }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - -           NEW NODE          - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var newNode = new Node(val)  // make a new Node
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode  // set current tail to new node
      this.tail = newNode       // set tail of new node to new node
    }
    this.length++;
    if (this.length === 0){
      this.head = null;
      this.tail = null;
    };
    return this;
  }

}

// poor coding but works
// var first = new Node("Hi");
// first.next = new Node("there!")
// first.next.next = new Node("there!")

var list = NewSinglyLinkedList();
list.push("Hello");
list.push("there!");
list.push("you");
