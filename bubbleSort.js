/**
 * Bubble Sort
 * Time complexity is O(n^2)
 * When the array is nearly sorted we can use the bubblesort with noswaps variable
 * which is shown below. This version is good on arrays which are nearly sorted since
 * we break out of the loop as soon as we find out the array is sorted.
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
function bubbleSort(arr){
    // variable to track if any swaps happened. 
    // If this is true we know that the array is sorted and can exit out of the loop.
    let noSwaps; 
    for(let i=arr.length-1; i > 0; i--){
        noSwaps = true
        for(let j=0; j<i; j++){
            //console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([37,45,29,8]));
