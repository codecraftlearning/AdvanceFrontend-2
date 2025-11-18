

// 1 -> 2 -> 3 -> 4 -> 5 -> 6

//Array


let arr = [34, 56, 23, 1, 43, 57.6, 100, 23, 56, 523];
// console.log(arr.length);

console.log(arr);

for (let i = 0; i<arr.length; i++) {
    arr[i] = arr[i] * 2;
}

console.log(arr);

//1). from an array of numbers print all the values that are prime.
//2). from an arry of number/text search the array if a given number is present or not. if not present print -1 else print the index.