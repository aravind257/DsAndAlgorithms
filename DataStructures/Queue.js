class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //Similar to push in Singly Linked List
    enqueue(val){
        let newNode = new Node(val);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;        
        }
        return ++this.size;
    }
    //Similar to shift in Singly Linked List
    dequeue(){
        let temp = this.first;
        if(this.first === null) return null;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);