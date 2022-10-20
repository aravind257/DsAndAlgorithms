/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 and checks whether there are any duplicates among the arguments passed in.  
 You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

 function areThereDuplicates(...arg){
    console.log(arg);
    const argFreq = {};
    for(let x of arg){
        if(argFreq[x] === 1) return true;
        argFreq[x] = (argFreq[x] || 0) + 1;
    }
    return false;

 }


console.log(areThereDuplicates(1,2,5,4,5));

//Two pointers solution

function areThereDuplicates2(...args){
    // Two pointers
  args.sort((a,b) => a - b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
console.log(areThereDuplicates2(10,12,10,4,5));

//One liner solution

function areThereDuplicates3(){
    return new Set(arguments).size !== arguments.length;
}