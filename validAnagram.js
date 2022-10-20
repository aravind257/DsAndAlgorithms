/*Given two strings, write a function to determine if the second string is an anagram 
of the first. An anagram is a word, phrase, or name formed by rearranging the letters 
of another, such as cinema, formed from iceman.*/
function validAnagram(s, t){
    if(s.length !== t.length) return false;

    const s_counter = {};
    const t_counter = {};

    for(let char of s){
        s_counter[char] = (s_counter[char] || 0) + 1;
    }
    for(let char of t){
        t_counter[char] = (t_counter[char] || 0) + 1;
    }
    console.log(s_counter, t_counter);
    for(let prop in s_counter){
        if(s_counter[prop]  !== t_counter[prop]) return false;
    }
    

    
    return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true