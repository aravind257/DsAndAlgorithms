/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals 
the target average. There may be more than one pair that matches the average target.
*/

function averagePair(arr, avg){
    let length = arr.length;
    if(length < 2) return false;

    //Take two pointers one at the start and one at the end;

    let a = 0, b = length - 1;
    let pairAvg;

    while(a < b){
        pairAvg = (arr[a] + arr[b])/2;
        if(pairAvg === avg) return true;
        else if(pairAvg < avg) a++;
        else b--;
    }
    return false;

}

console.log(averagePair([1,2,3,4,5], 10));