
/* Q1.Create a function that takes 3 arguments and returns the sum of the three arguments.*/

function sum(a,b,c){
	return a+b+c;
}
console.log(sum(2,3,4));

/*  Q2 Create a function named colorCar that receives a color, and prints out, "a red car"   */

function colorCar(color)
{
	console.log ("a "+color+" car");
}

colorCar('red');

/*  Q3 Create an object and a function that takes the object as a parameter and prints out all of its names and values.  */



function info(person){
	console.log(('firstName: '+''+person.firstName+' '+'lastName: '+' '+ person.lastName+' '+'age: '+''+person.age+' '+'learning: '+' '+person.learning));
}

let person = {
	firstName : "Saqib",
	lastName  : "nazir",
	age       :  27,
	learning  : "JavaScript"
};
info(person);

/* Q4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)*/
function vehicleType (color , code)
{
	if(code ==1) // car
	{
		console.log ("a "+color+" car");
	}
	else (code == 2) // MotorBike
	{
		console.log ("a "+color+" MotorBike");
	}
	
}
vehicleType('blue', 2)

/* Q5 write the following without the if statement, but with just as a single line with console.log(...);? */
3 == 3  ?  console.log('true')    : console.log('false')

/* Q6 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car*/

function vehicle (color , code , age)
{
	if(code ==1) // car
	{
		if(age > 0)
			console.log ("a "+color+"used car");
		else
			console.log ("a "+color+"new car");	
	}
	else if (code == 2) // MotorBike
	{
		if(age >= 1)
			console.log ("a "+color+"used MotorBike");
		else
			console.log ("a "+color+"new MotorBike");
	}
	else
	{
		console.log ("Please pass only 1 or 2 value in 2nd parameter of function");
	}
	}
vehicle('blue',1,5);

/* Q7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.*/

let vehicles = [];
vehicles[0] = "motorbike";
vehicles[1] = "caravan";
vehicles[2] = "bike";

/* Q8 How do you get the third element from that list?*/

let thirdElement = vehicles[2];             
console.log(thirdElement);

/* Q9 Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".*/

        function vehicleType1 (color , code , age)
   {
	let vehicles = ["motorbike","aeroplane","bike","carvan"];
	
if(age > 0)
			console.log ("a "+color+" used "+ vehicles[code]);
		      else
			console.log ("a "+color+" new  "+ vehicles[code]);	
	
   }
vehicleType1('green',3,1)

/* Q10 Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes. */

var vehicle = [];
   vehicle[0] = "motorbike";
   vehicle[1] = "caravan";
   vehicle[2] = "bike";

   console.log("Amazing Joe's Garage, we service");

   for (var i = 0; i<vehicle.length;i++)
  console.log (vehicle[i]);
/* Q11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7? */
function vehicleType2 (color , code , age)
   {
	var vehicle1 = ["motorbike","caravan","bike"];
	vehicle1[3]  = "One More Vehicle";
if(age >= 1)
			console.log ("a "+color+" used "+ vehicle1[code]);
		      else
			console.log ("a "+color+" new  "+ vehicle1[code]);	
	
   }
vehicleType2('green',3,1)

/* Q12 Create an empty object */
let emptyObject = [];

/* Q13 */
var obj1 = {
  a: 1,
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};

var obj2 = {
  a: "1",
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};
function compareValues (obj1 , obj2)
{
	if (obj1 == obj2)
		return true;
	else
		return false;
}

function compareTypes(obj1 , obj2)
{
	if(obj1 === obj2)
		return true;
	else
		return false;
}
console.log(compareValues(obj1,obj2))
console.log(compareTypes(obj1,obj2))
/* Q14 write a function that takes another function as an argument and runs it.*/

function foo(func) {
        
          func();
    }
    
    function bar() {
        console.log('Hello, I am bar!');
    }
    
    foo(bar);

 /* Q15 Write some code to test two arrays for equality using == and ===. Test the following:*/
 var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;
/*What do you think will happen with x == y, x === y and z == y and z == x? Prove it!*/
console.log('x == y would be false because they both are objects not a value like integer or string x === y would be false because they both are two objects not a single object they both have different reference in memory z == y    would be true because we are assigning the same object with same reference z == x would be false same as x == y is false ')

/* Q 16 var o1 = { foo: 'bar' };
     var o2 = { foo: 'bar' };
     var o3 = o2;
Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3`~~ `o1` changes `o3`(or not). 

Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}
*/

console.log('Q16.1 => Yes by changing o2 will change o3 as we are assigning o2 to o3.')
console.log('2.  o1 has no any link with o3 so by changing either o1 and o3 don’t make any effect on each other.')
console.log('3.  Yes the order matters. If we place o3 above o2 then it will give an error that o2 is not declared as at that position o2 was neither declared nor initialized and if we initialized the o2 and then assign it to o3 and then changed the value of o2 then o3 will not have that effect of change as it has old value before updating o2.')
/* Q17. What does the following code return? (And why?) */
let bar2 = 42; 
console.log(typeof typeof bar)
console.log('Q17=> it will return a string because 1st typeof bar; will return “number” and it’s data type is string so for second time typeof “number”; will return a string ')



/*  Created By
Saqib Nazir */
