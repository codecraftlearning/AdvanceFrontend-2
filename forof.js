/*for-of loop*/

let string = "learing For of loop";             // value of string
let size = 0;
for (let i of string) {                           // iterator -> characters // i is variable for each charcter
    console.log("charcter  " + i);                 // here ever space btw the words are also counted as character
    size++;
}
console.log(size); 


//for-in loop

let student = {                                //student is object here
    name: "bhavishya",
    age: 25,
    course: "fullstack development",
};

for (let key in student) {                   // have named key in student variable now it will display key value (name, age , couorse)
    console.log("key =", key, "value =", student[key]);
}                                           //  and when we log " variable name [key name] " value of the key is printed






