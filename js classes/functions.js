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

