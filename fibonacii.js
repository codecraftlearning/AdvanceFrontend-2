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

function fibonacii(range) {
    let a = 0 
    let b = 1
    while (a<=range) {
        console.log(a);
        let sum = a + b;
        a = b 
        b = sum   
    }
    
}

fibonacii(50)
