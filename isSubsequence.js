/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks 
whether the first string is present in the second string.
in the second string. 
*/

function isSubsequence(str1, str2){
    if(str1.length > str2.length) return false;
    let i=0, j=0;

    while(i<str1.length && j<str2.length){
        if(str1[i]===str2[j]){
            i++; j++;
        } else{
            i = 0;
            j++;
        }
    }
    if(i === str1.length) return true; else return false;

}
console.log(isSubsequence('hello', 'hello world')); // true
