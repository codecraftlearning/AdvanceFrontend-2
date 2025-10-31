let num1 = 2;
let num2 = 3;


function addition (num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function multiplication (num1, num2) {
    let mul = num1 * num2;
    return mul;
}

function addSquare (num1, num2) {
    let sq1 = multiplication(num1, num1);
    let sq2 = multiplication(num2, num2);
    sum = addition(sq1, sq2);
    return sum;
}

let res = addSquare(num1, num2);
console.log(res);
console.log(sum);


//homework -> adddition of cubes of 3 numbers
//series sum -> 2, 10 times, print result

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

