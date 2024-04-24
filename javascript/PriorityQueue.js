class Node{
    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(value, priority){
        let node = new Node(value, priority)
        this.values.push(node)
        this.puppleUp()
        return this.values
    }

    puppleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]
        let parentIdx, parent;

        while (idx > 0){
            parentIdx = Math.floor((idx -1 )/2)
            parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break
            this.values[idx] = parent
            this.values[parentIdx] = element
            idx = parentIdx
        }
        
    }
    dequeue(){
        let highPriority = this.values[0]
        let end = this.values.pop()
        if (this.values.length > 0){
            this.values[0] = end
            this.puppleDown()
        }
        return highPriority
    }
    puppleDown(){
        let idx = 0;
        let element = this.values[0]
        let length = this.values.length
        let leftChild, rightChild, leftChildIdx, rightChildIdx,swapIdx;

        while (true){
            leftChildIdx = 2 * idx + 1
            rightChildIdx = 2 * idx + 2
            swapIdx = null

            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority){
                    swapIdx = leftChildIdx
                }
            }

            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if (
                    (swapIdx === null && rightChild.priority < element.priority) || 
                    (swapIdx !== null && rightChild.priority < leftChild.priority)
                    ){
                    swapIdx = rightChildIdx
                    }
            }

            if (swapIdx === null) break
            this.values[idx] = this.values[swapIdx]
            this.values[swapIdx] = element
            idx = swapIdx
        }
    }
}

// let priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('Common Cold', 5)
// priorityQueue.enqueue('Concussion', 3)
// priorityQueue.enqueue('Broken Arm', 4)
// priorityQueue.enqueue('Head Injury', 1)
// priorityQueue.enqueue('High Fever', 2)
