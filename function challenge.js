//challenge 1

/*function getCelsius(F){
  const c = (F - 32) * 5/9;
  return c;
}

console.log(`The Temperature is ${getCelsius(32)} \xB0C`);*/

//Using arrow function 

const getCelsius = F => (F - 32) * 5/9;
console.log(`The Temperature is ${getCelsius(180)}\xB0C`);

//Challenge 2:

/*function minMax(arr = [1,2,3,4,5]){
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {min, max};
  
}

console.log(minMax());*/

//Using arrow function 
const minMax = (arr = [0,1,2,3,4,5,14,-34, -12]) => ({
  min: Math.min(...arr),
                                   max: Math.max(...arr),
});

console.log(minMax());
