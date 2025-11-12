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
    let rev = 0;                       // 0    1   17   271
    let temp = num;                    // 271

    while (num > 0) {                  //     271  27   7   0
        let revno = num % 10;          //     0    1   17  271 
        rev = rev * 10 + revno;        //         1    17   271
        num = num / 10;                // 
        num = parseInt(num);           // 
    }

    return rev;                        //172
}