class Student {
    public _name: String = '';
    private _age: number = 0;

    public constructor(name?: String, age?: number) {
        this.name = name ?? '';
        this.age = age ?? 0;
    }

    public set name(name: String) {
        name = name.trim().toLowerCase();
        this._name = name
    }

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
student._name = 'AnKiT SONi                    ';
student.printData();
student.name = 'AnKiT SONi                    ';
student.printData();


//oops concept (Data Encaptulation) -> we use public/protected/private to hide sensetive data from direct access