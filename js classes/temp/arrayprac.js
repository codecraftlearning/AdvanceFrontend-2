//                                               5       1   2     // lenth = 5 , i 0 to 4 , i = 1 , length - 1 - i  

//
function reversearray01(arry) {                           // 1 2 3 4
    // 4 
    for (let i = 0; i < arry.length / 2; i++) {
        let org = arry[i]                                 // i = 0       i = 1
        arry[i] = arry[arry.length - 1 - i]               // arry [0]  = arry [4-1 = 3] , arry 
        arry[arry.length - 1 - i] = org
    }

}



let learn = [1, 2, 3, 12, 45, 5, 4, 5]
reversearray01(learn)
console.log(learn);

// 1 2 3 4                           
// i = 0 , 4 2 3 1
// i = 1 , 4 3 2 1
// i = 2 , 4 2 3 1
// i = 3 , 1 2 3 4

// 1 2 3 4 5
/* 
 i = 0 , 5 234 1
 i = 1 , 5 4 3 2 1
 i = 2 , 5 4 3 2 1
 i = 3 , 5 2 3 4 1
 i = 4 . 1 2 3 4 5
 */

// write a program to accept an array and iterate through the array and check in element is even then
// divide it by 2 or if element is odd multiple by 2
// the print the modified array .


// function isodd(num) {
//     if (num % 2 !== 0) {
//         return true;
//     }
//     else { return false; }

// }

// function oddevencal(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (isodd(arr[i])) {
//             arr[i] = arr[i] * 2
//         }
//         else { arr[i] = arr[i] / 2 }
//     }
//     console.log(arr);

// }

// oddevencal([1, 2, 3, 4, 5])


// // write a program to reverse an array ( hint index , logic )

// let eret = []
// eret.push(1)
// eret.push(2)
// eret.push(3)
// eret.push(4)
// eret.pop()
// console.log(eret);


// function reverseArr(arr) {                                      // [1, 2, 3, 4]
//     let reversed = [];                                          // [          ] [ 4         ]   [4, 3 ]           .....

//     for (let i = arr.length - 1; i >= 0; i--) {                 //         4 will be pushed     now to 3 will be pushed
//         reversed.push(arr[i]);                                  //         arr[3] = 4           arr[2] = 3         .....
//     }                                                           //   4 wont be pushed as there is nothing to
//     return reversed;                                           // Return final result
// }
// console.log(reverseArr([1, 2, 3, 4]));


// function reverse01(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// reverse01([2, 3, 4, 5]);


































/*
function printingArrayValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
    return 'print completed';
}

function processArray(vap) {
    let message = printingArrayValue(vap);
    console.log(message);
}


processArray([1, 2, 3, 4, 56]);


processArray([1, 5, 6, 7, 89, 9, 1, 2, 5, 4, 2])
*/



//find max and min in element in an array 

function maxin(arry) {
    for (let index = 0; index < arry.length; index++) {
        let tempmax = arry[index];
        if (tempmax > arry[index] + 1) {
            tempmax = arry[index] + 1
        }
        else {console.log(tempmax);
        }
    }
}

maxin([45, 45, 78, 4, 5])

// find secod largest elemet in array 


