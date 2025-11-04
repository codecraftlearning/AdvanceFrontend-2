// adddition of cubes of 3 numbers
let a = 2;
let b = 4;
let c = 4;

let sumOfCubes = a**3 + b**3 + c**3;

console.log("adddition of cubes of 3 numbers", sumOfCubes);


//series sum -> 2, 10 times, print result

let num = 12;
let times = 20;
let sum = 0;

for (let i = 1; i <= times; i++) {
  sum += num;
}
console.log("The sum of the series is:", sum);

let day = 7;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number")
}