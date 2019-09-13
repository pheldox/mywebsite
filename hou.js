 Intro
 * Apparently one of the easiest ways to debug javascript code is by logging porting of interest. In doing so we
 * are able to visualize what happening under the hood.
 * The console.log is undoubtedly is famously know for exercises of this kind.
 */

/* console trace
This method displays a trace that shows how the code ended up at a certain point.
In essence if same function can be called in multiple places then having the context enhances your
your understanding of what has happened.
printing a full stack trace becomes handy.
*/
function subtract (a, b) {
     console.trace('subract called with', a, 'and', b);
     return a - b;
}

function sum() {
	return subtract(8, 11) + subtract(9, 14)
}


function main() {
     var x = subtract(3, 2);
     var y = sum();
}
//main();

/*console.count */
/* Helps to know the number of times a function was called durring execution.If you pass for instance 
a fxn doThis() to console.count(). It outputs the number of things it called with the p*/

function sayHell(x){
     console.count(x)
}
sayHell('Felix')
sayHell('Kweku')
sayHell('Felix')

//console.trace
/*this enables one to visualize the call history of methods or variables 
*It displays a trace that show how the code ended up at a certaing point.
*there may be some function that we want to call once. console.trace can be used
*to make sure the code is behaving the way we want it to.
*/


function subtract (a, b) {
      console.trace('===> subract called with', a, 'and', b);
      return a - b;
 }
function sum() {
	return subtract(8, 11) + subtract(9, 14)
}

function main() { 
	var x = subtract(3, 2);
	var y = sum();
}
main()


//console.table
/**console.table() allows to display data in the console in a nice tabular format. It comes in very handy when having to visualize arrays or objects.
 * It can display tabular data for arrays or objects.
 * E.g given a list of objects(containing tribe and food) in an array(tribes) and favourite foods
 */

var  tribes = [
     {tribe: "Ga", food: "Kenkey"},
     {tribe: "Akan", food:"Fufu"},
     {tribe: "Ewe", food:"Akple"}
];

// A classical object
var tribe = {
     Ga : "Kenkey",
     Akan: "Fufu",
     Ewe: "Aple"
}
