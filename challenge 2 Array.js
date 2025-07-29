// Challenge 1: Given, and arr:

const arr = [1,2,3,4,5];
//Change it to [0,1,2,3,4,5,6]

x = arr.push(6);
x = arr.unshift(0);

console.log(arr.reverse());

//Challenge 2: combine arr1 and arr2

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

let y = arr1.concat(arr2.slice(1));

console.log(y);

