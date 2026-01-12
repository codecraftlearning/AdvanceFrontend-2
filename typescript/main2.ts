class Student {
    private _name: String = '';
    private _age: number = 0;

//A constructor is a special function inside a class that runs automatically when an object is created from that class
    public constructor(name?: String, age?: number) {           
        this.name = name ?? '';
        this.age = age ?? 0;
    }


//Set is a collection that stores unique values with fast lookup and no duplicates.
    public set name(name: String) {
        name = name.trim().toLowerCase();
        this._name = name
    }

//get is used to read a value like a property, but runs a function behind the scenes. It lets you control access to a property.

    public get name(): String {
        return this._name;
    }
    
    public set age(age: number) {
        this._age = age;
    }

    public get age(): number {
        return this._age;
    }

    public printData(): void {
        console.log(this.name, this.age); 
    }
}


let student: Student = new Student();
// student._name = 'AnKiT SONi                    ';
student.printData();
student.name = 'AnKiT SONi                    ';
student.printData();


//oops concept (Data Encaptulation) -> we use public/protected/private to hide sensetive data from direct access