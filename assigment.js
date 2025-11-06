/*
q1 print all prime no within the given range
q2 print all the armstrong no within the given range ( exmaple 153 = 1^3 + 5^3 + 3^3 ) 1 + 125 + 27 = 153 ; 
q3 print fibonacii series wihin the given range   ( 0 1 1 2 3 5 8 13 21 34 55 )
q4 write a program to reverse a no and stor it as a no only cant be string 
*/

//q1 print all prime no within the given range.


let startingRange = 10;
let endingRange = 30;


function prime(startingRange, endingRange) {
    if (endingRange <= 1 || startingRange > endingRange || startingRange <= 0) {
        console.log("The range provide isnt correct");
        return;
    }

    for (let num = startingRange; num <= endingRange; num++) {

        let isPrime = true;

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}

prime(startingRange, endingRange);


/*
q2 print all the armstrong no within the given range ( exmaple 153 = 1^3 + 5^3 + 3^3 ) 1 + 125 + 27 = 153 ;
need to lear how to convert  number to strings then again number  // maybe while loop 
q3 print fibonacii series wihin the given range   ( 0 1 1 2 3 5 8 13 21 34 55 )
unable to perform the desired annswers are not coming 
q4 write a program to reverse a no and store it as a no only cant be string 
// add first 2 nos the add the answer with eding value of the last formula



let addedSum =  ;

for (let i = startingRange; i <= endingRange; i++ ) {
    addedSum = startingRange + i  ;
    console.log("fibonacii =", addedSum);
}
    */




















