let my_arr = [21,54,1,0,35,23,21,19,45,87,11] // random data
function bubble_sort(arr) {
    let temp;
    let swap;
    for (let i = arr.length; i >= 0; i--){ // starts getting sorted at the end
        swap = false;
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swap = true;
            }  
        }
        if(!swap) break
    }
    return arr
}

// let list = [21,54,1,0,35,23,21,19,45,87] // random data
// 99,19,45,87
// 21,45,87,99

// let results = bubble_sort(my_arr)
// console.log(results)

function selection_sort(arr) {
    let lowest;
    let temp;
    for (let i = 0; i < arr.length; i++){
        lowest = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[lowest] > arr[j]){
                lowest = j
            }
        }

        if (lowest !== i) {
            temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

// let results = selection_sort(my_arr)
// console.log("results: ", results)

function insertion_sort(arr) {
    // find lowest inerting intp correct spot
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > temp; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }
    return arr
}

// let results = insertion_sort(my_arr)
// console.log(results)

