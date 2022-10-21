//The below method is similar to process used in isSubsequence.js instead of 
//using two nested loops like given in the tutorial pseudocode.s
function naiveStringSearch(str1, str2){

    if(str1.length > str2.length) return 0;
    let count = 0;

    let i = 0;
    let j = 0;
    let str1Length = str1.length;
    let str2Length = str2.length;

    while(i < str1.length && j < str2.length){

        if(str1[i] === str2[j]){
            i++; j++;
        } else {
            i = 0;
            j++;
        }

        if(i === str1.length) {
            count++;
            //resetting j to the character which is next to start of the current found string.
            //This is done to find overlapped string matches. If this is not done we might be missing
            // some matches because j will start after the end of the current match.
            j = j - i + 1
            i = 0;
        
        }

    }

    return count;

}
console.log(naiveStringSearch('ha', 'pakodi haha aravind ha haha'));
console.log(naiveStringSearch('pap', 'papapap')) // overlapped matches example.


//solution based on the tutorial psedocode. tutorial solution.

function nSS(short, long){
    let count = 0;

    for(let i = 0; i<long.length; i++){
        for(let j = 0; j<short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(nSS('ha', 'pakodi haha aravind ha haha'));
console.log(nSS('pap', 'papapap')) // overlapped matches example.