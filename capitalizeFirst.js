/**
 * capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, 
capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr){

    const capitalizedArray = []
    function helper(hArr){
        if(hArr.length === 0) return capitalizedArray;
        capitalizedArray.push(hArr[0][0].toUpperCase()+ hArr[0].slice(1));

        helper(hArr.slice(1))

    }
    
    helper(arr);

    return capitalizedArray;
}

console.log(capitalizeFirst(['car','taco','banana']));

//tutorial solution without helper method
function capitalizeFirst2(array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst2(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }