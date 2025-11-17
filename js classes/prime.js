/*
2 3 5 7 11 13 17 19
7 
divide from 3 and modulus is 0 then print composite and top 
if not divide from 4 and modulus is not 0 then move to ext no till the time it -1 then num 
*/

function isPrime(num) {
    if (num < 2) {
        console.log("not prime");
        return
    } 
    for (i = 2; i <= num/2 ; i++) {
        if (num % i === 0) {
            console.log("composite");
            return;
        }
    }
    console.log("Prime");
}

let num = 1

isPrime(num)









