/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); // this section runs fine it seems

let isValid = Boolean("false"); //this is true because it is a boolean with string
let correct = null;
isValid = Number(correct); //isValid now is null and false

if (isValid) {
    console.log("This is valid!"); //This should not run
}

let age = "25";
let totalAge = age + 5;
//console.log("Total Age: " + totalAge); //prints 255 not 30
let newAge = Number(age);
console.log("Total Age: " + newAge); //This works as age is not a string when this line is executed


////////////////Task number 2//////////////////////////
let number = 63;
console.log(typeof number);

let sentence = "I can count at least... " + number + " bananas here.";
console.log(sentence) //implicit type conversion
console.log(typeof sentence); //Number to string for "number" 

let secondTask = 0;
if (secondTask) {
  console.log("This worked!"); //explicit type conversion, this gets skipped due to false.
}

secondTask = String(secondTask);

if (secondTask) {
  console.log("This worked, as intended!"); //explicit type conversion, prints after returns true.
}
