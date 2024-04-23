class Heap{
    constructor(){
        this.values = [41,39,33,18,27,12,]
    }
    insert(value){
        this.values.push(value)
        if(this.values.length > 1){
            this.puppleUp()
        }
        return this.values
    }
    puppleUp(){
        let idx = this.values.length - 1
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            let child = this.values[idx]
            if (child <= parent) break
            this.values[parentIdx] = child
            this.values[idx] = parent
            idx = parentIdx   
        }
    }
    extractMax(){
        let max = this.values[0]
        let end = this.values.pop()
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
        while(true){
            let leftChildIdx = 2 * Idx + 1
            let rightChildIdx = 2 * Idx + 2
            let leftChild, rightChild;
            let swapIdx = null
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

let h = new Heap()
h.insert(55)
