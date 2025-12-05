//classes in javascript


class Student {
    name;
    experience;

    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
        this.teach();
    }

    teach = () => {
        let description = `student name is ${this.name} & experience is ${this.experience}.`;
        let xpDesc = '';
        let method = '';
        if (this.experience >= 5) {
            xpDesc = 'Experience Developer';
            method = 'Reference Teaching';
        } else if (this.experience >= 2 && this.experience < 5) {
            xpDesc = 'Moderate Experience';
            method = 'slight faster teaching';
        } else if (this.experience < 2) {
            xpDesc = 'Very Less Experience';
            method = 'teaching in layman language';
        }
        description = `${description} And as the student is/has ${xpDesc}, prefer ${method}.`

        this.startTeaching(description);
    }

    startTeaching = description => console.log("Started teaching a student:", description);
}

// const student1 = new Student('Bhavishya', 0);
// student1.teach();



//variable hoisting example
// var xx;
// xx();
// function xx () {
//     console.log(num);   
// }
// let num = 10;






// //prototypes in javascript


// const student1 = {
//     name: 'Bhavishya',
//     experience: 0
// }

// const student2 = {
//     name: 'Ashish',
//     experience: 2
// }

// const student3 = {
//     name: 'Ankit',
//     experience: 5
// }

// function startTeachingAsPerDescriptin(description) {
//     console.log("Started teaching a student:", description);
// }

// function teach() {
//     let description = `student name is ${this.student.name} & experience is ${this.student.experience}.`;
//     let xpDesc = '';
//     let method = '';
//     if (this.student.experience >=5) {
//         xpDesc = 'Experience Developer';
//         method = 'Reference Teaching';
//     } else if (this.student.experience >=2 && this.student.experience <5) {
//         xpDesc = 'Moderate Experience';
//         method = 'slight faster teaching';
//     } else if (this.student.experience < 2) {
//         xpDesc = 'Very Less Experience';
//         method = 'teaching in layman language';
//     }
//     description = `${description} And as the student is/has ${xpDesc}, prefer ${method}.`
//     startTeachingAsPerDescriptin(description);
// }

// function teaching(student) {
//     this.student = student;
// }
// teaching.prototype.startTeaching = teach;
// console.log(teaching.prototype);

// let teach1 = new teaching(student1);

// teach1.startTeaching();


// teach(student1, startTeachingAsPerDescriptin);
// teach(student2, startTeachingAsPerDescriptin);
// teach(student3, startTeachingAsPerDescriptin);





// //callbacks in javascript


// const student1 = {
//     name: 'Bhavishya',
//     experience: 0
// }

// const student2 = {
//     name: 'Ashish',
//     experience: 2
// }

// const student3 = {
//     name: 'Ankit',
//     experience: 5
// }

// function startTeachingAsPerDescriptin(description) {
//     console.log("Started teaching a student:", description);
// }


// function teach(student, callback) {
//     let description = `student name is ${student.name} & experience is ${student.experience}.`;
//     let xpDesc = '';
//     let method = '';
//     if (student.experience >=5) {
//         xpDesc = 'Experience Developer';
//         method = 'Reference Teaching';
//     } else if (student.experience >=2 && student.experience <5) {
//         xpDesc = 'Moderate Experience';
//         method = 'slight faster teaching';
//     } else if (student.experience < 2) {
//         xpDesc = 'Very Less Experience';
//         method = 'teaching in layman language';
//     }
//     description = `${description} And as the student is/has ${xpDesc}, prefer ${method}.`
//     callback(description);
// }

// teach(student1, startTeachingAsPerDescriptin);
// teach(student2, startTeachingAsPerDescriptin);
// teach(student3, startTeachingAsPerDescriptin);











// //functions, arrow functions, anonymus functions, closures, Lexical scope


// // let a = 10;
// // function sq(num) {
// //     return num ** 2;
// // }

// // function sumNSq(a, b) {
// //     const sum = a + b;
// //     return () => {
// //         return sum ** 2;
// //     }
// // }

// // a = 30;
// // let sqr = sumNSq(1,2);
// // // let sqr = () => { paternt ---> (const sum = 3;) return sum ** 2;  }

// // let sqr2 = sumNSq(2,2);
// // let sqr3 = sumNSq(2,3);


// // console.log(sqr());







// // // function sum(a, b) {
// // //     return a+b;
// // // }


// // // const sum2 = (a, b) => {
// // //     return a+b;
// // // }

// // // const sq = a => a**2;

// // // console.log(sum(1,2));
// // // console.log(sum2(1,2));
// // // console.log(sq(2));


