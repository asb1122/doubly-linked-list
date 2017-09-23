const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      var node = new Node(data);
      if (this.length == 0){
        this._head = node;
        this._tail = node;
      } else {
        this._tail.next = node;
        this._tail = node;
      }
      this.length++;
    }

    head() {
      if (this._head == null){
        return null;
      } else {
        return this._head.data;
      }
    }

    tail() {
      if (this._tail == null){
        return null;
      } else {
        return this._tail.data;
      }
    }

    at(index) {
      return this.getNodeAtIndex(index).data;
    }

    insertAt(index, data) {
      var node = new Node(data);
      var prevNode = this.getNodeAtIndex(index - 1);
      var nextNode = this.getNodeAtIndex(index);
      node.prev = prevNode;
      node.next = nextNode;
      this.length ++ ;
      prevNode.next = node;
      nextNode.prev = node;
    }

    isEmpty() {
      if (this.length == 0){
        return true;
      } else {
        return false;
      }
    }

    clear() {
      this.length = 0;
      this._tail = null;
      this._head = null;
    }

    deleteAt(index) {
      var nodeToDelete = this.getNodeAtIndex(index);
      var prevNode = this.getNodeAtIndex(index - 1);
      var nextNode = this.getNodeAtIndex(index + 1);
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length --;
    }

    reverse() {}

    indexOf(data) {}

    getNodeAtIndex(index){
      var node = this._head;
      var count = 0;
      while ( count < index){
        count++;
        node = node.next;
      }
      return node;
    }
}

module.exports = LinkedList;
