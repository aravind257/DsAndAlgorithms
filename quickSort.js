/**
 * Quick Sort
 * Best & Average case time complexity: O(nlogn)
 * Worst case time complexity: O(n2). Because if we pick first element as pivot and the array
 * is already sorted we'll be making O(n) decompositions since we won't be having anything
 * less than the pivot. We can mitigate this by choosing random element as the pivot or middle
 * element or median element.
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
function getPivotIndex(arr, si=0, ei=arr.length - 1){
    let pivot = arr[si];
    let swapIndex = si;
    

    let i = si + 1;
    while(i < ei + 1){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }

        i++;
    }
    swap(arr, swapIndex, si);
    return swapIndex;
}


function quickSort(arr, left = 0, right= arr.length - 1){

    if(left < right){ // Until subarray is not a single element i.e. left !== right


    let pivotIndex = getPivotIndex(arr, left, right);

        //left
        quickSort(arr, left, pivotIndex - 1 );
        //right
        quickSort(arr, pivotIndex + 1, right);

    }
    return arr; // I'm not sure if return is required since sorting is in-place here.

}

let arr = [26,23,27,44,17,47,39,42,43,1, -3, -4];


console.log(quickSort(arr));

