class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
};

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        let poppedElement = this.tail;
        if(this.head === null) return undefined;
        else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedElement.prev;
            this.tail.next = null;
            poppedElement.prev = null
        }
        this.length--;
        return poppedElement;
    }

    shift(){
        let poppedHead = this.head;
        if(this.head === null) return undefined;
         else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
         } else {
            this.head = this.head.next;
            this.head.prev = null;
            poppedHead.next = null;
         }
         this.length--;
         return poppedHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    get(index){
        let pos, current;
        
        if(index < 0 || index >= this.length) return null;
        else if(index <= this.length/2){
            pos = 0;
            current = this.head;
            while(pos !== index){
                current = current.next;
                pos++;               
            }
        } else {
            pos = this.length - 1;
            current = this.tail;
            while(pos !== index){
                current = current.prev;
                pos--   
            }
        }
        return current;
    }

    set(index, val){
        const node = this.get(index);
        if(node !== null){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        const newNode = new Node(val);
        if(index < 0 || index > this.length) return false;
        else if(index === 0) this.unshift(val);
        else if(index === this.length) this.push(val);
        else {
            const prevNode = this.get(index - 1);
            const nextNode = prevNode.next;
            newNode.prev= prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        else if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            const node = this.get(index);
            const prevNode = node.prev;
            const nextNode = node.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;

            node.prev = null;
            node.next = null;

            this.length--;
            return node;
        }

    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            node.prev = next;
            
            prev = node;
            node = next;
        }
        
        return this;
        //see SinglyLinkedList.js for comments to get clear understanding.
    }

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

let list = new DoublyLinkedList();


