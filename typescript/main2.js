var Student = /** @class */ (function () {
    function Student(name, age) {
        this._name = name !== null && name !== void 0 ? name : '';
        this._age = age !== null && age !== void 0 ? age : 0;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            name = name.trim().toLowerCase();
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.printData = function () {
        console.log(this.name, this.age);
    };
    return Student;
}());
var student = new Student();
student._name = 'AnKiT SONi                    ';
student.printData();
student.name = 'AnKiT SONi                    ';
student.printData();
