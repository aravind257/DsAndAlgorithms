/**
 * Merge Sort
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */

function merge(arr1, arr2){

    //console.log(arr1, arr2);

    const sortedArray = [];
    let len1 = arr1.length, len2 = arr2.length;
    let i = 0, j = 0;

    while(i < len1 && j < len2){
        if(arr1[i] < arr2[j]){
            sortedArray.push(arr1[i]);
            i++;
        } else {
            sortedArray.push(arr2[j]);
            j++;
        }
        
    }
    
    // We can also write two for loops for adding the remaining elements which is easier
    // understand.
    // while(i < arr1.length) {
    //     results.push(arr1[i])
    //     i++;
    // }
    // while(j < arr2.length) {
    //     results.push(arr2[j])
    //     j++;
    // }

    for(;i < len1 || j < len2; i++, j++){
        //console.log(i, j);
        if(i < len1) sortedArray.push(arr1[i]);
        else sortedArray.push(arr2[j]);
        
    }
    return sortedArray;
}
// If you get confused put a break point at function call and see the call stack in chrome dev console.
function mergeSort(arr){
    //console.log(arr);
    let length = arr.length;

    if(length <= 1){
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4,3,24,1,2]));