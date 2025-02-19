// // Values & Data
// // console.log(23 - 14 + 16 + 234 - 26)

// let firstName = "Sani";
// let lastName = "Ismail";
// // let age = 78;

// if (age <= 56) {
//   console.log("He is a child");
// } else {
//   console.log("He has grown a lot")
// }

// console.log('Falgore');
// console.log(1999999999);

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let year = 23;

// let PI = 3.142;
// console.log(PI);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(myCurrentJob);
// console.log(myFirstJob);

// var age = 18;

// if (age >= 65) {
//   console.log("You get your income from your pension")
// } else if (age < 65 && age >= 18) {
//   console.log("Each month you get salary")
// } else if (age < 18) {
//   console.log("You get aan allowance")
// } else {
//   console.log("The value of the age is not a nu,ber")
// }

// //Switch statement
// var day = 'Sunday';
// switch(day) {
//   case 'Monday':
//     console.log("Do something");
//     break;
//   case 'Tuesday':
//     console.log("Do something");
//     break;
//   case 'Wednesday':
//     console.log("Do something");
//     break;
//   case 'Thursday':
//     console.log("Do something");
//     break;
//   case 'Friday':
//     console.log("Do something");
//     break;
//   case 'Saturday':
//     console.log("Do something");
//     break;
//   case 'Sunday':
//     console.log("Have barbecue");
//     break;
//   default:
//     console.log("There is no such day");
// }


// STRICT MODE

'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive the car.');

const interface = 'Audio'; // Reserve word

const private = 323; // Reserve word
*/

//FUNCTIONS

function logger() {
  console.log('My name is Sani Ismail');
  console.log('He is my aunt');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

 fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
//console.log(appleJuice);

//For loop Example
for (let i = 1; i<5; i++){
  console.log(i);
}
console.log('Go');

// While loop
//let i = 1;
while (i<5){
  console.log(i);
  i = i+1;
}
console.log('Go!')

let counter = 3;
while (counter < 0){
  console.log(counter);
}
console.log('Happy new Year')





/*TASK 1
Write  'for' loop that will perform exactly the same repetitive code as this:*/
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

//solution:

for (let i = 1; i<=5; i++){
  console.log(i)
}
console.log('Counting completed!')

/* TASK 2
Write a 'for' loop that will perform exactly the same repetitive code as this:*/
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

// solution

for (let i = 5; i>5; i--) {
  console.log(i)
}
console.log('Countdown finished!')


var i = 1;
while (i<=5){
  console.log(i)
  i=i+1
}
console.log('Counting completed!')

var petDog = 'Pepper';
var petCat = 'Rex';
var dogSound = 'woof'
var catSound = 'meeeeee'

console.log(petDog, "says", dogSound);

console.log(petCat, "says", catSound);

catSound = 'meow';

console.log(petCat, 'now says', catSound);

//functions

function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if(word[i] == match) {
      console.log('Found the', match, 'at', i)
    } else {
      console.log('--- No match found at', i)
    }
  }
}

letterFinder("test", "t")