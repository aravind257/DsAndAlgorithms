/**
 * Insertion Sort
 * Complexity: O(n^2)
 * 
 * If the array is nearly sorted, insertion sort is really good. 
 */



function insertionSort(arr){
    let length = arr.length;

    for(let i = 1; i < length; i++){
        let currVal = arr[i];
        let j = i - 1;
        while(j >=0 && arr[j] > currVal){
            arr[j+1] = arr[j];
            j--;
        }
        

        arr[j+1] = currVal;
    }


    return arr;
}

console.log(insertionSort([37,45,29,8]));