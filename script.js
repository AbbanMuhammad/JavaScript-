let x;
let y;

x = Math.floor(Math.random() * 100 + 1);

y = Math.floor(Math.random() * 50 + 1);

console.log(x);
console.log(y);

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = Math.floor(x / y);
let remainder = x % y;

let outPut = `The sum is: ${sum}\nDifference is: ${difference}\nProduct is: ${product}\nQuotient is: ${quotient}\nRemainder is: ${remainder}`;

console.log(outPut);
