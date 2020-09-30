function SelectionSort(inputArray){
    let length = inputArray.length
    for (let i = 1 ; i < length; i++){
        let key = a[i]
        for (var j = i -1 ; j >= 0 && key < a[j]; j--){
            a[j +1] = a[j]
        }
        a[j + 1] = key
    }
    return inputArray
}

function insertionSorted(inputArray){
    let length = inputArray.length
    
    for( let i =  0; i < length -1; i++){
        let min_index = i
        for ( let j = i; j < length ; j++ ){
            if ( a[j] < a[min_index])
                min_index = j
        }
        swap(inputArray,min_index,i)
    }
}

function bubbleSort(array){
    let length = array.length
    for (let i in array){
        for( let j = 0; j < length - i - 1; j++){
            if (array[j] > array[j+1])
                swap(array,j, j+1)
        }
    }
}

function swap(array, index, index2){
    let temp = array[index]
    array[index] = array[index2]
    array[index2] = temp
}

let a = [12,13,11,5,6]
SelectionSort(a)
console.log({selectionSorted:a})

a =  [12,13,11,5,16]
insertionSorted(a)
console.log({insertionSorted:a})

a =  [12,13,111,5,16]
bubbleSort(a)
console.log(`array sorted ${a}`)