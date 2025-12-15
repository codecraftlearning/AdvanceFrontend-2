// write a program to accept an array and iterate through the array and check in element is even then
// divide it by 2 or if element is odd multiple by 2
// the print the modified array .

function Arry(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element % 2 === 0) {
            result.push(element / 2);
        } else {
            result.push(element * 2);
        }
    }

    console.log(result);
}

Arry([2, 5, 8, 7, 3]);




//find max and min in element in an array.

function maxin(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function minin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function minmixin(arr) {
    console.log(arr);

    arr.sort((a, b) => a - b)
    console.log(arr);

    let max = maxin(arr);
    let min = minin(arr);

    console.log("Maxin =", max);
    console.log("Minin=", min);
}

minmixin([45, 45, 78, 4, 5]);





// sort an array using bubble sort    ** imp dsa quess.
// sort an array using insertion sort ** dsa imp.
// sort an array using selection sort ** dsa imp.
