// ways to group code to use it a later time.

function sayHello(){
  console.log('Hello World');
}
sayHello();

// it can take parameters 
function add(num1, num2){
  console.log(num1 + num2);}

add(23, 45);

// it can return a value 
function subtract(num1, num2){
  return num1 - num2;
}

const result = subtract(23, 12);

console.log(result);

//another example 
function registerUser(user){
  return user + ' is registered ';
}

console.log(registerUser('Sani'));

//Default parameters 
function registerUser(user = 'Muhammad'){
  return user + ' is registered ';
}

console.log(registerUser());

// another Example 
function sum(... numbers ){
  return numbers;
}

console.log(sum(1,2,3,4,5));


//we can
function sum(... numbers){
  let total = 0;
  for(const num of numbers){
    total += num;
  }

  return total;
}

console.log(sum(1,2,3,4,5,100));

//object as parameters 

function loginUser(user){
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
  
}

const user ={
  name: 'Sani Ismail',
  id: 002,
};

console.log(loginUser(user));
console.log(loginUser({
  name: 'Usman Yufuf',
  id: 1,
}))

//arrays as parameters 
function getRandom(...arr){
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}

getRandom(1,2,3,4,5,6,7,8,9,10);


//Scope: Global which can be accessible anywhere. Example 

const x = 100;

console.log(x, 'in global');

function run(){
    //console.log(window.immerHeight);
  console.log(x, 'in function');
}

run();

if(true){
  console.log(x, 'in a block');
  
}

//function scope is a variable declared inside the function:
function add(){
  const x = 1 // This will overwrite the globally scoped x value which is called 'VARIABLE SHADOWING'
  const y = 50; //function scope, it cannot be access outside the function.
  console.log(x + y);
}

add();
//console.log(y); //it's a function scope.


//Blocked Scope: is a variable declared with let or const inside a function or in the if statement.

if(true){
  let a = 50;
  const b = 100;
  var c = 150;
}

//console.log(a);// block scoped 
//console.log(b); // block scoped 
console.log(c);

// function scoped 

function runs(){
  var d = 200;
  console.log(d);
}

/*console.log(d); var is a function scoped,it cannot be access outside the function.*/


//Nested Scope

function first(){
  const x = 100;

  function second(){
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

//function Declaration VS Expression 

function addDollar(value){
  return '$' + value;
}

//Function declaration 
console.log(addDollar(1000));

function addPlusSign(value){
  return '+' + value;
};
//function expression 
console.log(addPlusSign(2000));


//Arror functions

const addition = (a, b) => {
  return a + b;
};

console.log(addition(2,4));
//implicit return 
const subtraction = (a, b) => a - b;

console.log(subtraction(45, 12));

//if it has one parameter. leave off () with this
const double = a => a * 20;

console.log(double(3));

// return an object 
const createObj = () => ({
  name: 'Sani',
});

console.log(createObj());

//arror function 
const numbers = [1,2,3,4,5];

numbers.forEach(function (n){
  console.log(n);
});

//Arrow function in a callback

numbers.forEach(n => console.log(n));

//IIFE Immediately invoked function 
/*(function () {
  const user = ,'Umar';
  console.log(user);
})();*/


