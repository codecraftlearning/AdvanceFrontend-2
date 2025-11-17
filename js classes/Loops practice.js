//write a program to reverse a no and store it as a no only cant be string


function reverseNumber(num) {          // 271               27                           2                          0 (while breaks here)
    let rev = 0;                       // 0                  1                          17                        172
    let temp = num;                    // 271           

    while (num > 0) {                  // 271
        let revno = num % 10;          // 271 % 10 = 1                27 % 10 = 7               2 % 10 = 2
        rev = rev * 10 + revno;        //       0 * 10 + 1 = 1              1 * 10 + 7 = 17         17 * 10 + 2  = 172                 
        num = num / 10;                //         271 / 10 = 27.1             27 / 10 = 2.7               2 / 10 = 0.2
        num = parseInt(num);           //                  = 27                       = 2                        = 0
    }

    return rev;                        //172
}


console.log(reverseNumber(456987425));



//factorial of a no.

function factorial(num) {               //       5  
    let factorial = 1;                  //                     
    while (num >= 1) {                  //         5           4                3               2            1 >= 1 ( BREAK)
        factorial = factorial * num;    // 1 * 5 = 5       5 * 4 = 20      20 * 3 = 60     60 * 2 = 120
        num = num - 1;                  //         5 - 1     = 4        4 - 1 = 3       3 - 1 = 2         2 - 1 = 1
    }
    return factorial
}

console.log(factorial(3));

//prime no 
function isPrime(num) {
    if (num < 2) {
        console.log("not prime");
        return
    }
    for (i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            console.log("composite");
            return;
        }
    }
    console.log("Prime");
}

let num = 1

isPrime(num)




// guess the age of modi ?

let modiAge = 70;
let guessedAge = prompt("modi age ???");

while (modiAge != guessedAge) {
    guessedAge = prompt("try again.")
    if (guessedAge < 0) {
        if (confirm("do you want to exit ?")) {
            break
        }
    }
}
if (guessedAge < 0) {
    alert("thank you for playing ")
}
else { console.log("correct guessed") }