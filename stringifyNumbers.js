/**
 * stringifyNumbers
Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
 */

function stringifyNumbers(obj){

    const newObj = {}

    for(let prop in obj){

        if(typeof obj[prop] === 'number'){
            newObj[prop] = obj[prop].toString();
        } 
        else if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])){
            newObj[prop] = stringifyNumbers(obj[prop]);
        } else {
            newObj[prop] = obj[prop];
        }
    }

    return newObj;


}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

//modifying the existing object instead of creating new object solution
function stringifyNumbers2(obj){

    for(let prop in obj){
        if(typeof obj[prop] === 'object') stringifyNumbers2(obj[prop]);
        else if(typeof obj[prop] === 'number') obj[prop] = obj[prop].toString();
    }

    return obj;


}


console.log(stringifyNumbers(obj))



