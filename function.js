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
