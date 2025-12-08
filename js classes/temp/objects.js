

let studentRoll;
let studentName;
let StudentAdmissionNumber;
let studentAddress;
let studentGender;

//JSON (java script object notation) Object
let student = {
    roll: 10,
    name: 'ankit',
    admissionNumber: 1234,
    address: {
        housenumber: 1,
        streetName: 'asdas',
        locality: 'asdsadf',
        city: 'rmagarh',
        district: 'ramgarh',
        state: 'Jharkhand',
        pinCode: 829122
    },
    gender: 'male',
    subjects: ['maths', 'physics', 'chemistry'],
    isActive: true
}

student.isActive = false;

console.log(student.isActive);


for (let key in student.address) {
    console.log(key);
}

console.log(Object.keys(student));
console.log(Object.values(student));




