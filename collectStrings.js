/**
 * collectStrings
Write a function called collectStrings which accepts an object and returns 
an array of all the values in the object that have a typeof string
 */

function collectStrings(obj){

    const strArray = [];

    function helper(hObj){

        for(let prop in hObj){
            if(typeof hObj[prop] === 'string') strArray.push(hObj[prop]);
            //if you dont put '&& !Array.isArray(hObj[prop]' strings in arrays will also be captured.
            else if(typeof hObj[prop] === 'object' && !Array.isArray(hObj[prop])) helper(hObj[prop]);
        }
    }
    helper(obj);

    return strArray;

}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                        pakodi: ['coco', 'banana']
                    }
                }
            }
        }
    }
};

//pure recursion version

function collectStrings2(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings2(obj[key]));
        }
    }
 
    return stringsArr;
}

console.log(collectStrings(obj));