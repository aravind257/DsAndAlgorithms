/**
 * capitalizeWords
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
 */

function capitalizeWords(arr){

    const cWords = [];
    function helper(hArr){

        if(hArr.length === 0) return cWords;
        cWords.push(hArr[0].toUpperCase());

        helper(hArr.slice(1));



    }
    helper(arr);

    return cWords;

}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

//tutorial solution
function capitalizeWords2 (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords2(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }