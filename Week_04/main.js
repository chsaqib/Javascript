
/* Question 1 */
let x=10;

/* Q:2 Rounding off Integers */
console.log(Math.round(7.25));
/* Q:3 Creating a Array of Colors */
let colors = ['red', 'green', 'blue'];

/* Q:4 Checking the Lenght of Array */
console.log(colors.length);

/* Q:5 checking type of variables */
let a = 9;
let b = 'Hello';

if (typeof a === typeof b) {
	console.log('SAME TYPE');
}
else{
	console.log('Different TYPE');
}

/* Q:6 New value of Variable */
let c=7;
c = c % 3
console.log('New value of C='+''+ c);

/* Q:7(1) Can you store multiple types in an array? Numbers and strings?  */
let array =[4,6,8,'saqib', 'nazir']
for(let i=0; i<array.length;i++){
	console.log(array[i]);
} 

/* Q7(2)  */

function compareInfinities(d, e)
{
    if(!isFinite(d) && !isFinite(e))
        return "Both variables are infinities";
    else
        return "both variables are not infinite";
}

var variable1 = 6/0;
var variable2 = 10/0;
var result = compareInfinities(variable1, variable2);
console.log(result);