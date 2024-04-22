class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        if (value === undefined) return null
        let node = new Node(value)
        if (!this.root){
            this.root = node
        }else{
            let current = this.root
            while (true){
                if (value < current.value){
                    if (!current.left){
                        current.left = node
                        return this
                    }
                    current = current.left
                }else{
                    if (!current.right){
                        current.right = node
                        return this
                    }
                    current = current.right
                } 
            }
        }
    }

    find(value){
        if (!this.root || value === undefined) return null
        let current = this.root

        while(current){
            if (value < current.value){
                current = current.left
            }else if (value > current.value){
                current = current.right
            }else{
                return current
            }
        }
        return false  
    }

    breadfirstsearch(){ // Traversing a binary tree - (FIFO - Push/Unshift (Queue))
        let results = []
        let queue = [this.root]
        while(queue.length > 0){
            let node = queue.shift()
            results.push(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if (node.right){
                queue.push(node.right)
            }
        }
        return results
    }
    dfsPreorder(node=this.root, results= []){ // Traversing Root -> Left -> Right
        if(!node) return results

        // Visit current node (root)
        results.push(node.value)

        // Recursively traverse left nodes
        this.dfsPreorder(node.left, results)

        // Recusively traverse right nodes
        this.dfsPreorder(node.right, results)
        return results
    }

    dfsInOrder(node=this.root, results=[]){ // Traversing Left -> Root -> Right
        if (!node){
            return results
        }

        // Recusively visit left nodes
        this.dfsInOrder(node.left, results)

        // Visit current node (root)
        results.push(node.value)

        // Recusively visit right nodes
        this.dfsInOrder(node.right, results)
        return results   
    }

    dfsPostOrder(node = this.root, results=[]){ // Traversing Left -> Right -> Root
        if (!node){
            return results
        }

        // Recusively visit left nodes
        this.dfsPostOrder(node.left, results)

        // Recusively visit right nodes
        this.dfsPostOrder(node.right, results)

        // visit current node (root)
        results.push(node.value)

        return results
    }
}

let b = new BinaryTree()
b.insert(100)
b.insert(90)
b.insert(110)
b.insert(80)
b.insert(85)
b.insert(120)
b.insert(105)