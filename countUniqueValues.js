// Implement a function called countUniqueValues which accepts sorted Array,
// and counts the unique values in the array.
// one way of doing this.
function countUniqueValues(arr){
    let uniqueValues = 0;
    let length = arr.length;
    if(length === 0) return uniqueValues;
    else if(length === 1) uniqueValues++;
    else {
        uniqueValues++;
        for(let i=1; i<length; i++){
            if(arr[i-1] === arr[i]){
                //no change in uniqueValues
            } else {
                uniqueValues++;
                console.log(arr[i], uniqueValues);
            }
        }
    }


    return uniqueValues;
}

console.log(countUniqueValues([1,2,3,3,3]));

//another way which doesn't require another variable to track unique values

function countUniqueValues2(arr){
    let length = arr.length;
    if(length === 0) return 0;
    else if(length === 1) return 1;
    else{
        let i=0;
        let j= i+1;
        while(j < length){
            if(arr[i] === arr[j]) j++;
            else{
                i++;
                arr[i] = arr[j];
            } 
        }
        return i+1;
    }
}
console.log(countUniqueValues2([1,2,3,3,3]));