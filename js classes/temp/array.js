//array
let studentName = ['asds', 12, "adasdfa", 48]; // string and umbers eed to be saved as we treat them in general

console.log(studentName);
console.log(studentName.length);  //length property is saved by default

// to get a particular value from array

console.log(studentName[0]); // here index starts form 0 goes to ......
console.log(studentName[8]); // when we try to print the index no whihc does exist the undifined is printed as we have ot defined it but it do exist.

// lets change the value of index 2
studentName[2] = 34;
console.log(studentName[2]);// the vlaue is now changed 
studentName[1] = 1;
console.log(studentName[1]);// value can be changed from string to num and um string in array.

// lets print the etire array in one go 

// here i is index and we use index no as here i = 0 = asds
for (let i = 0; i < studentName.length; i++) {
    console.log(studentName[i]);
}




