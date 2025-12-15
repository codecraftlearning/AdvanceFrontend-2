// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {

//     let minValue = arr[i];
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < minValue) {
//         minValue = arr[j];
//         minIndex = j;
//       }
//     }

//     swap(arr, i, minIndex);
//   }

//   return arr;
// }

// console.log(selectionSort([5, 3, 8, 4, 1]));


function slectionSort(arry) {
    let orgarry = arry;
    let sortedArry = [];
    while (orgarry.length > 0) {
        const minValue = Math.min(...orgarry)   //( whe passing arry value one by one instead of arry as whole do apply ... )
        sortedArry.push(minValue)
        let minIndex = orgarry.indexOf(minValue)
        orgarry.splice(minIndex, 1);
    }
    return console.log(sortedArry);;
}

slectionSort([5, 2, 3, 4])
