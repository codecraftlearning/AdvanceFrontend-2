//write a program to reverse a no and store it as a no only cant be string


function reverseNumber(num) {          // 271
    let rev = 0;                       // 0                  1                          17                        172
    let temp = num;                    // 271               27                           2                          0 (while breaks here)

    while (num > 0) {                  // 271
        let revno = num % 10;          // 271 % 10 = 1                27 % 10 = 7               2 % 10 = 2
        rev = rev * 10 + revno;        //       0 * 10 + 1 = 1              1 * 10 + 7 = 17         17 * 10 + 2  = 172                 
        num = num / 10;                //         271 / 10 = 27.1             27 / 10 = 2.7               2 / 10 = 0.2
        num = parseInt(num);           //                  = 27                       = 2                        = 0
    }

    return rev;                        //172
}


console.log(reverseNumber(456987425));
