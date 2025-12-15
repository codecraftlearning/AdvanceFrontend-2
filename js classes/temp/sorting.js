//find secod largest elemet in array.

function sortAcending(arry) {
    arry.sort((a, b) => a - b);
    return arry;
}

console.log(sortAcending([2, 3, 7, 5, 9]));




function secondLargest(arry) {
    let sorted = sortAcending(arry);
    return sorted[sorted.length - 2];
}

console.log(secondLargest([5, 7, 1, 2, 30]));


// bubble sort

function bubblesorting(arry01) {
    for (let i = 0; i < arry01.length - 1; i++) {
        let bubblesorted = [];
        if (i < i++) {
            let i = i++
        }
        return console.log(arry01);
        ;
    }
}

bubblesorting([2, 1, 3, 5, 7, 8])
              


