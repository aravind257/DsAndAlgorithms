class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //push element to the end of the list.

    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;        
        }
        this.length += 1;   
        return this;

    }
    //pop element from the end of the list
    pop(){
        let poppedElement;
        let current, prev;
        if(this.head === null) return undefined;
        else if(this.head === this.tail){
            poppedElement = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            current = this.head;
            while(current.next){
                prev = current;
                current = current.next;
            }
            this.tail = prev;
            this.tail.next = null;
            poppedElement = current;
        }
        this.length--;
        return poppedElement;
    }
    //remove element from the beginning of the list
    shift(){
        if(this.head === null) return undefined;
        let poppedHead = this.head;
        this.head = poppedHead.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return poppedHead;
    }
    //add element to the beginning of the list
    unshift(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get the node at the specific index(index starts at 0)
    get(index){
        if(index >= this.length || index < 0) return null;
        let pos = 0;
        let current = this.head;
        while(pos !== index){
            current = current.next;
            pos++;
        }
        return current;
    }
    //set(update) the value at a particular index
    set(index, val){
        const node = this.get(index);
        if(node === null) return false;
        node.val = val;
        return true; 
    }
    //insert new node at a particular index
    insert(index, val){
        const newNode = new Node(val);
        if(index < 0 || index > this.length) return false;
        else if(index === 0) this.unshift(val);
        else if(index === this.length) this.push(val);
        else {
            const prevNode = this.get(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }
    //remove node at a particular index
    remove(index){
        if(index < 0 || index >= this.length) return null;
        else if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            const prevNode = this.get(index - 1);
            const currentNode = prevNode.next;

            prevNode.next = currentNode.next;
            this.length--;
            return currentNode;
        }
    }
    //reverse the linkedlist in place
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev

            prev = node;
            node = next;
        }
        return this;
        //iteration 1
        //null  [14,   2,   23,   32,    6]
        //prev  node  next
        //With each iteration we update prev, node, next and the respective next values.
        //iteration 2
        //null  [14,   2,   23,   32,    6]
        //      prev  node  next
        // so on...
    }
    //print the linkedlist
    print(){
        const arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
list.push(14);
list.push(2);
list.push(23);
list.push(32);
list.push(6);

