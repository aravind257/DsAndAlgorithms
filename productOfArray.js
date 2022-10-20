/**
productOfArray
Write a function called productOfArray which takes in an array of numbers and 
returns the product of them all.
 */

function productOfArray(arr){
    if(arr.length === 1) return arr[0];
    if(arr.length === 0) return;
    
    return arr[0] * productOfArray(arr.slice(1));
}

let numArr = []
console.log(productOfArray(numArr));