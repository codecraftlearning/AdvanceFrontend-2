// 121 (1+2+1)^ = 121
/*
121 % 10 = 1
121 121 / 10 = 12.1  parseInt
12 / 10 = 1.2 parseInt
1 / 10 = 0.1 parseInt
*/




function isArmStrong(num) {          // 153  , 15   , 1     , 0
    let sum = 0;                     // 0    , 27   , 152   , 153
    let temp = num;                  // 153  , 153  , 153   , 153
    while (num > 0) {                // true , true , true  , false 
        let reminder = num % 10       // 3    , 5    , 1
        num = num / 10                  // 15.3 , 1.5  , 0.1
        num = parseInt(num)          // 15   , 1    , 0
        sum += reminder ** 3          // 9    , 152  , 153
    }
    return (sum === temp)                                   //true
}


function checkInRange(range) {
    for (let i = 0; i <= range; i++) {
        if (isArmStrong(i)) {
            console.log(i);
        }
    }

}
checkInRange(200000)

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