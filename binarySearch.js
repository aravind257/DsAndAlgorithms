function binarySearch(arr, target){

    let left = 0, right = arr.length - 1;
    let middle;

    while(left <= right){
        middle = Math.ceil((left + right) / 2);
        console.log(left, middle, right, arr[middle], target);
        if(arr[middle] === target) return middle;
        else if(target > arr[middle]){
            left = middle + 1;
        } else if( target < arr[middle]){
            right = middle - 1;
        }
        
    }

    return -1;

}

//tutorial solution
/*
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
*/

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95));