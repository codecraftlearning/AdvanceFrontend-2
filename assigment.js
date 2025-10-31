// adddition of cubes of 3 numbers
let a = 2;
let b = 3;
let c = 4;

let sumOfCubes = a**3 + b**3 + c**3;

console.log("adddition of cubes of 3 numbers", sumOfCubes);


//series sum -> 2, 10 times, print result

let num = 2;
let times = 10;
let sum = 0;

for (let i = 1; i <= times; i++) {
  sum += num;
}
console.log("The sum of the series is:", sum);