
class Student {
    name = null;
    age = null;
    gender = null;
    email = null;
    password = null;
    course = null;


    constructor(name, age, gender, email, password, course) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.course = course;
    }
}


function handleFormSubmit(event) {
    event.preventDefault();

    const student = new Student();
    student.name = document.getElementById('name').value;
    student.age = document.getElementById('age').value; 
    student.gender = document.querySelector('input[name="gender"]:checked').value;
    student.email = document.getElementById('email').value;
    student.password = document.getElementById('password').value;
    student.course = document.getElementById('course').value;

    console.log(student);
}

// function formConnect() {
//     const form = document.getElementById('registrationForm');
//     const submitButton = form.querySelector('#submit');
//     submitButton.addEventListener('click', handleFormSubmit);
// }

// formConnect();