let no = 6556;
let divisor = 2
let reminder = 0


if (reminder === no % divisor){
    console.log("even")
}
else {
    console.log("odd")
}



//  1 print all even numbers  from zero to the range provided .
//  2 print all odd numbers  from zero to the range provided .
//  3 in a range from zero to provided range add all even numbers and subtract half of the sum of odd numbers .
//**4 dont use internet for this **** check if a number provided is a prime no or not .
   //"print prime if prime .composite if not prime"



   //print all even numbers  from zero to the range provided .

let range = 100;
let sum = 0;

function isEven(num) {
    return num % 2 === 0;
    
}

for (let i = 0; i <= range; i++) {
    if ( isEven(i) ) {
        console.log(i);
        sum += i;
    }
}
console.log("sum Of All EvenNumbers = ", sum)

//print all odd numbers  from zero to the range provided

let rangeodd = 50;
let sum01 = 0;

for (let i = 0; i <= rangeodd; i++) {
    if ( !isEven(i)) {
        console.log(i);
        sum01 += i;
    }
}
console.log("sum Of All Odd Numbers = ", sum01)

//in a range from zero to provided range add 
//all even numbers and subtract half of the 
// sum of odd numbers .

let range00 = 500;
let evenNoSum = 0;
let oddNoSum = 0;

for (let i = 0; i <= range00; i++) {
    if (isEven(i)) {
        //console.log(i);
        evenNoSum += i;
    }
}
console.log("evenNoSum", evenNoSum);


for (let i = 0; i <= range00; i++) {
    if (!isEven(i)) {
        // console.log(i);
        oddNoSum += i ;
    }
}
console.log("oddNoSum ", oddNoSum);


let answer = evenNoSum - oddNoSum / 2
console.log("answer", answer);


//check if a number provided is a prime no or not .
//"print prime if prime .
// composite if not prime"

