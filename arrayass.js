//1). from an array of numbers print all the values that are prime.

function isPrime(num) {
    if (num < 2) {                              
        return false;
    }
    for (i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}

let number = [1, 2, 3, 4, 5, 6]

for (let value of number ) {
    if(isPrime(value)){            //agar result true ho to print karo else leave
        console.log(value);
    }
   }


//2). from an arry of number/text search the array if a given number is present or not. if not present print -1 else print the index.

function presentNo(range, search ) {
 for (let i = 0; i < range.length; i++ ){
    if (range[i] === search) {
        return i;
    }
 }
 return -1;                                      // return works like else but AFTER entire loop
}

let range = [1, 0, 3, 8, 9, 11, 12, 15, 16, 14 ];
let search = 15;

console.log("item present @ index no. ",presentNo(range, search));
