class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(value){
        this.values.push(value)
        this.puppleUp()
        return this.values
    }
    puppleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]
        let parentIdx, parent;
        while(idx > 0){
            parentIdx = Math.floor((idx - 1)/2)
            parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx   
        }
    }
    extractMax(){
        let max = this.values[0]
        let end = this.values.pop()
        //  edge case if length > 0 [puppleDown]
        if (this.values.length > 0){
            this.values[0] = end
            this.puppleDown()   
        }
        return max
    }
    puppleDown(){
        let Idx = 0;
        let length = this.values.length
        let element = this.values[Idx]
        let leftChildIdx, rightChildIdx, leftChild, rightChild, swapIdx;
        while(true){
            leftChildIdx = 2 * Idx + 1
            rightChildIdx = 2 * Idx + 2
            swapIdx = null
            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if (leftChild > element){
                    swapIdx = leftChildIdx
                }
            }

            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if (
                    (swapIdx === null && rightChild > element) || 
                    (swapIdx !== null && rightChild > leftChild)
                    ){
                    swapIdx = rightChildIdx
                }
            }
            if(swapIdx === null)break;
            this.values[Idx] = this.values[swapIdx];
            this.values[swapIdx] = element;
            Idx = swapIdx;
        }
    }
}

// let maxBinaryHeap = new MaxBinaryHeap()
// maxBinaryHeap.insert(50)
// maxBinaryHeap.insert(40)
// maxBinaryHeap.insert(60)
// maxBinaryHeap.insert(30)
// maxBinaryHeap.insert(70)
// maxBinaryHeap.insert(20)
// maxBinaryHeap.insert(80)
// maxBinaryHeap.insert(10)


class MinBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(value){
        this.values.push(value)
        this.puppleUp()   
        return this.values
    }

    puppleUp(){
        let idx = this.values.length - 1 
        let element = this.values[idx]
        let parentIdx;
        let parent;
        while(idx > 0){
            parentIdx = Math.floor((idx -1)/2)
            parent = this.values[parentIdx]
            if (element >= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMin(){
        let min = this.values[0]
        let end = this.values.pop()
        //  edge case if length > 0 [puppleDown]
        if (this.values.length > 0){
            this.values[0] = end
            this.puppleDown()
        }
        return min
    }
    puppleDown(){
        let idx = 0;
        let element = this.values[0]
        let length = this.values.length
        let leftChildIdx, rightChildIdx, leftChild, rightChild, swapIdx;
        while(true){
            leftChildIdx = 2 * idx + 1
            rightChildIdx = 2 * idx + 2
            swapIdx = null

            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if (leftChild < element){
                    swapIdx = leftChildIdx
                } 
            }
            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if (
                    (swapIdx === null && rightChild < element ) || 
                    (swapIdx !== null && rightChild < leftChild)
                    )
                    swapIdx = rightChildIdx
            }

            if (swapIdx === null) break
            this.values[idx] = this.values[swapIdx]
            this.values[swapIdx] = element
            idx = swapIdx
        }
    }
}

let minBinaryHeap = new MinBinaryHeap()
minBinaryHeap.insert(50)
minBinaryHeap.insert(40)
minBinaryHeap.insert(60)
minBinaryHeap.insert(30)
minBinaryHeap.insert(70)
minBinaryHeap.insert(20)
minBinaryHeap.insert(80)
minBinaryHeap.insert(10)
