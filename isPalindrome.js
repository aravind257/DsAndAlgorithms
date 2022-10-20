/**
 * isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed 
to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

function isPalindrome(str){
    if(str.length === 1) return true;

    let len = str.length;
    if(str[0] === str[len - 1]){
        return isPalindrome(str.slice(1, len - 1));
    } else {
        return false;
    }
}

console.log(isPalindrome('amanaplanacanalpanama'));

//tutorial solution

function isPalindrome2(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}