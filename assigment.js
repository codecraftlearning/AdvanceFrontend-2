//print all even numbers  from zero to the range provided .

let range = 100;
let sum = 0;

for (let i=0 ; i<=range ; i++){
    if (i % 2 === 0){
        console.log(i);
         sum = sum + i;}
}
console.log ("sum Of All EvenNumbers = ", sum  )

//print all odd numbers  from zero to the range provided

let rangeodd = 50;
let sum01 = 0;

for (let i=0; i<=rangeodd; i++){
    if (i % 2 !== 0){
        console.log(i);
        sum01 = sum01 + i;
    }
}
console.log ("sum Of All Odd Numbers = ", sum01 )

//in a range from zero to provided range add 
//all even numbers and subtract half of the 
// sum of odd numbers .

let range00 = 500;
let evenNoSum = 0;
let oddNoSum = 0;

for (let i = 0; i <= range00; i++) {
    if (i % 2 === 0) {
        //console.log(i);
        evenNoSum = evenNoSum + i;
    }
    }
console.log("evenNoSum", evenNoSum);


for (let i = 0; i <= range00; i++) {
    if (i % 2 !== 0) {
       // console.log(i);
        oddNoSum = oddNoSum + i / 2 ;
    }
}
console.log("oddNoSum ", oddNoSum );


let answer = evenNoSum - oddNoSum
console.log("answer", answer );


//check if a number provided is a prime no or not .
//"print prime if prime .
// composite if not prime"














