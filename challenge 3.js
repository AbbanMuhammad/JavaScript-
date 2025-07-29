const x = Math.floor(Math.random() * 100 + 1);

const y = Math.floor(Math.random() * 50 + 1);

console.log(x, y);


//Sum
const sum = x + y;
const sumOut = `${x} + ${y} = ${sum}`;
console.log(sumOut);

// Difference 
const difference = x - y;
const diffOut = `${x} - ${y} = ${difference}`;
console.log(diffOut);

//Product

const product = x * y;
const productOut = `${x} * ${y} = ${product}`;
console.log(productOut);

//Quotient 

const quotient = Math.floor(x / y);
const quotientOut = `${x} / ${y} = ${quotient}`;
console.log(quotientOut);

//Remainder

const remainder = x % y;
const remainderOut = `${x} % ${y} = ${remainder}`;
console.log(remainderOut);

