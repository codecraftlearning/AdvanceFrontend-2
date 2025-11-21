// write a program to accept an array and iterate through the array and check in element is even then 
// divide it by 2 or if element is odd multiple by 2 
// the print the modified array .

function isodd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    else { return false; }

}

function oddevencal(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isodd(arr[i])) {
            arr[i] = arr[i] * 2
        }
        else { arr[i] = arr[i] / 2 }
    }
    console.log(arr);

}

oddevencal([1, 2, 3, 4, 5])


// write a program to reverse an array ( hint index , logic )

let eret = []
eret.push(1)
eret.push(2)
eret.push(3)
eret.push(4)
eret.pop()
console.log(eret);



































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






