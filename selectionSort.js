/**
 * Selection Sort
 * Complexity: O(n^2)
 * Selection Sort is only better than BubbleSort when you think you need fewer swaps in 
 * your sorting algorithm. Otherwise it is not at all good sort. 
 */

 function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}

// swap using arrow functions and array destructuring.
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

function selectionSort(arr){
    let min;
    let length = arr.length;
    for(let i = 0; i < arr.length; i++){
        min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i) {
            console.log(arr, i, min);
            swap(arr, i, min);
            
        }
    }
    return arr;
}


console.log(selectionSort([37,45,29,8]));
