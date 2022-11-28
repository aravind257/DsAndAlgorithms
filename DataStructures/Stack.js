//Stack using Singly Linked List
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //Similar to unshift in Singly Linked List
    push(val){
        let newNode = new Node(val);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    //Similar to shift in Singly Linked List
    pop(){
        let temp = this.first;
        if(this.first === null) return null;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
