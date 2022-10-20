/**
 * Write a recursive function called reverse which accepts a string and 
 * returns a new string in reverse.
 */

function reverse(str){

    if(str.length === 1) return str[0];

    return str.substring(str.length - 1) + reverse(str.substring(0, str.length-1 ));


}

//simple way solution in tutorial
function reverse2(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
console.log(reverse('Raja Aravind Pulagam'));