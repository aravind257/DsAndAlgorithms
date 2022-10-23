/**
 * Radix Sort
 * Time Complexity: O(nk) where n is length of the array and k is number of digits(average).
 */

// This following only works for base 10 numbers
// You can also convert the number into string and get the digit by calculating the index.
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10
}
// The following function can also be done by converting number into string and returning 
// the length.
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let max = 0;
    for(let num of arr){
        max = Math.max(max, digitCount(num))
    }
    return max;
}

function radixSort(nums){
    
    let maxIter = mostDigits(nums);
    let length = nums.length;

    for(let i = 0; i < maxIter; i++){
        let buckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < length; j++){
            buckets[getDigit(nums[j], i)].push(nums[j]);
        }
        
        nums = [].concat(...buckets); // not sure about the time complexity of this line.

    }
    return nums;

}
console.log(radixSort([1235, 56, 7, 23, 2123, 11323, 34, 565]));

