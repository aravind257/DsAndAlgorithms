class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    
    insert(val){
        const newNode = new Node(val);
            if(this.root === null){
                this.root = newNode;
                return this;
            }
            else{
                let currentNode = this.root;
                while(true){
                    // You can also handle duplicate values by adding a frequency 
                    // property in Node class.
                    if(newNode.val === currentNode.val) return undefined;
                    if(newNode.val > currentNode.val){
                        if(currentNode.right === null){
                            currentNode.right = newNode;
                            return this;
                        } else {
                            currentNode = currentNode.right;
                        }
                    } else if(newNode.val < currentNode.val){
                        if(currentNode.left === null){
                            currentNode.left = newNode;
                            return this;
                        } else {
                            currentNode = currentNode.left;
                        }
                    }
            }
        }
        
        
    }

    find(val){
            let currentNode = this.root;
            while(true){
                if(currentNode === null) return false;

                if(val === currentNode.val) return true;
                else if(val > currentNode.val) currentNode = currentNode.right;
                else if(val < currentNode.val) currentNode = currentNode.left;
            }
    }

    breadthFirstSearch(){
        const visited = [];
        const queue = [];
        let currentNode;
        if(this.root === null) return visited;
        else queue.push(this.root);

        while(queue.length !== 0){
            currentNode = queue.shift();
            visited.push(currentNode.val);

            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
        }
        
        return visited;

    }

    depthFirstSearchPreOrder(){
        const visited = [];
        if(this.root === null) return visited;

        function traverse(node){
            visited.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return visited;
    }

    depthFirstSearchPostOrder(){
        const visited = [];
        if(this.root === null) return visited;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root);

        return visited;
    }

    depthFirstSearchInOrder(){
        const visited = [];
        if(this.root === null) return visited;

        function traverse(node){
            // You can write it this way instead of if. Both are same.
            node.left && traverse(node.left);
            visited.push(node.val);
            node.right && traverse(node.right);
        }
        traverse(this.root);

        return visited;
    }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


