/*Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
*/

function sameFrequency(a,b){
    const aFreq = {};
    const bFreq = {};

    let temp = a;
    let prop;
    while(temp !== 0){
        prop = temp%10
        aFreq[prop] = (aFreq[prop] || 0) + 1
        temp = Math.floor(temp/10)
    }
    temp = b;
    while(temp !== 0){
        prop = temp%10
        bFreq[prop] = (bFreq[prop] || 0) + 1
        temp = Math.floor(temp/10)
    }
    console.log(aFreq, bFreq)

    for(let prop in aFreq){
        if(aFreq[prop] !== bFreq[prop]) return false;
    }
    return true;
}

console.log(sameFrequency(1322,2231));