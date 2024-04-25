class HashTable{
    constructor(length=53){
        this.keyMap = new Array(length)
    }

    _hash(key){
        let total = 0;
        let primeNumber = 31
        let char;
        let val;

        for (let i = 0; i < Math.min(key.length, 100); i++){
            char = key[i]
            val = char.charCodeAt(0) - 96
            total = (total * primeNumber + val) % this.keyMap.length
        }
        return total
    }

    set(key, val){
        let idx = this._hash(key)
        if (!this.keyMap[idx]){
            this.keyMap[idx] = []
        }
        this.keyMap[idx].push([key,val])
    }

    get(key){
        let idx = this._hash(key)
        if (!this.keyMap[idx]) return undefined
        for (let i = 0; i < this.keyMap[idx].length; i++){
            if (this.keyMap[idx][i][0] === key){
                return this.keyMap[idx][i][1]
            }
        }
    }

    values(){
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++ ){
                    if (!valuesArr.includes(this.keyMap[i][j][1])){
                       valuesArr.push(this.keyMap[i][j][1]) 
                    }
                }
            }
        }
        return valuesArr
    }
    keys(){
        let keysArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++ ){
                    if (!keysArr.includes(this.keyMap[i][j][0])){
                       keysArr.push(this.keyMap[i][j][0]) 
                    }
                }
            }
        }
        return keysArr
    }
}

let ht = new HashTable(7)
ht.set('pink', '#193ale1123')
ht.set('cyan', '#193ae2')
ht.set('blue', '#193ale1123')
ht.set('green', '#193le2')
ht.set('orange', '#193ale1123')
ht.set('magenta', '#293ale2')