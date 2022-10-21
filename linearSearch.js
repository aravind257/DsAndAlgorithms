function linearSearch(arr, target){
    let length = arr.length;
    for(let i = 0; i < length; i++){
        if(arr[i] === target) return i; 
    }
    return -1;
}
//O(n)