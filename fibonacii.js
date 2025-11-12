//print fibonacii series wihin the given range
//0 1 1 2 3 5 8 13 21 34 55 
// 0+1 =1 

 /*
function fibonaciiAddition(range) {
    let sum = 0;
    while (sum <= range) {
        for (let i = 1; i <= range; i += i) {
            sum = sum + i
            console.log(sum);
        }
    }
}


fibonaciiAddition(125)

*/

let range = 12;

function fibonacii(range) {
    let a = 0 
    let b = 1
    while (a<=range) {             
        console.log(a);          //      a = 0         a = 1                      a = 1                a = 2                 a = 3                  a = 5
        let sum = a + b;         //  0 + 1 = 1                       1 + 1 = 2            1 + 2 = 3           2 + 3 = 5             3 + 5 = 8
        a = b                    //                a = 1                      a = 1                a = 2              a = 3                 a = 5
        b = sum                  //                b = 1                      b = 2                b = 3              b = 5                 b = 8
    }
    
}

fibonacii(50)
