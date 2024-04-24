class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    push(value){// setting up new tail
        let node = new Node(value)
        if (!this.head){
            this.head = node
            this.tail = this.head
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.length++
       return this
    }
    pop(){ // removing the tail and setting up new tail
        let current = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            let newTail = null
            while(current.next){
                newTail = current
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null
            this.length--
        }
        return current
    }
    unshift(value){ // setting up new head
        let node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = this.head
        }else{
            let current = this.head
            this.head = node
            this.head.next = current
        }
        this.length++
        return this 
    }
    shift(){// removed the head and set up new head
        let current = this.head
        if(!current){
            return null
        }else{
            this.head = current.next
        }
        this.length--
        return current
    }
    get(index){ // Get value of the index
        if(index < 0 || index > this.length || index === undefined) return null
        let current = this.head
        let counter = 0
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    set(value, index){ // Set value of the index
        if(value === undefined) return null
        let node = this.get(index)
        if(node){
            node.value = value
            return this
        }
        return null
    }
    insert(value, index){ // Insert value at the index
        if(value === undefined || index === undefined) return null
        if (index == 0) return this.unshift(value)
        if (index == this.length) return this.push(value)
        let node = new Node(value)
        let prev = this.get(index - 1)
        if (prev){
            let currentNode = prev.next
            prev.next = node
            node.next = currentNode
            this.length++
            return this
        }
        return null
    }
    remove(index){// Remove value at the index
        if (index === undefined) return null
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let node =  this.get(index - 1)
        if(node){
            let removed = node.next
            let temp = removed.next
            node.next = temp
            this.length--
            return removed
        }
        return null
    }
}

const s = new SinglyLinkedList()
s.push(100)
s.push(200)
s.push(300)
s.push(400)
s.push(500)
s.push(600)