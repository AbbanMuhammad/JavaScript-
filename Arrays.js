//declaring an array 
const friends = ["Musa", "Ibrahim", "Abubakar", "Mujaheed"];
console.log(friends);

// Or 
const yearsOfBirth = new Array(1990, 1890, 1798, 1980, 2025);
console.log(yearsOfBirth);

//Replace an element in the array using 
friends[0] = "Muhammad";
console.log(friends);

// To check the friends based on their position 

console.log(friends[3]);
console.log(friends[0]);

let firstName = 'Sani Ismail';
const myData = [firstName, 1989, friends, "Falgore", 'GTC Wudil'];
console.log(myData);

//Exercise 

const calAge = function (birthYear) {
  return 2025 - birthYear;
}

const years = [1895,1990,1987,1979,1989,2002];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[4]);

console.log(age1, age2, age3);

//push() method on array is used to add element to the end of the array

friends.push('Haruna');
friends.push('Dauda', 'Shuaibu');// we can add as many as we can
console.log(friends);

//umshift() method is used to add element at the beginning if the array 

friends.unshift('Murtala', 'Shafiu');
console.log(friends);

//pop() method is used to remove an element in the array from the end of it

friends.pop(); // No need to pass any parameters, Shuaibu will be removed 
friends.pop();// Dauda will be removed 
console.log(friends);

//shift() method is used to remove element from the beginning of the array 

friends.shift();// Murtala will be removed 
friends.shift();//Shafiu will be removed 
console.log(friends);

console.log(friends.indexOf('Abubakar'));// The position if the element.
console.log(friends.indexOf('Haajara'));// we get -1 when the element is not in the array 

//includes() do almost the same as indexOf function but it returns true if the element is in the array otherwise, display false.
friends.push(2025, "Haajara");
console.log(friends.includes('Abubakar'));//true 
console.log(friends.includes('Haajara'));//false 
console.log(friends.includes('2025'));// it uses strict equality 

//we can use conditional statement 
if (friends.includes("Haajara")){
  console.log("I do have a wife called: Haajara.");
}