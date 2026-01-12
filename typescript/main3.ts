


/*
OOPs: Object Orient Programmings

1). every thing should be a part of class as a property or methods 
2). Data Encaptulation is mandatory
3). Inheritance
4). Diamond / Multiple Inheritance is not permitted 
*/


type GenderType = 'M' | 'F' | undefined;

class Human {
    private _name: string = '';
    private _age: number = -1;
    private _gender: GenderType;
    private _height: string = '';
    private _weight: string = ''; 

    public constructor(name: string, age: number, gender: GenderType, height: number, weight: number) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
    }

    public set name(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }
    public set age(age: number) {
        this._age = age;
    }
    public get age(): number {
        return this._age;
    }
    public set height(height: number) {
        this._height = height + 'ft';
    }
    public get height(): string {
        return this._height
    }
    public set weight(weight: number) {
        this._weight = weight + 'kg';
    }
    public get weight(): string {
        return this._weight
    }
    public set gender(gender: GenderType) {
        this._gender = gender;
    }
    public get gender(): GenderType {
        return this._gender;
    }
}
class Boy extends Human {
    private _hasBeard: boolean = false;

    public constructor(name: string, age: number, gender: GenderType, height: number, weight: number, hasBeard: boolean) {
        super(name, age, gender, height, weight);
        this.hasBeard = hasBeard;
    }

    public set hasBeard(hasBeard: boolean) {
        this._hasBeard = hasBeard;
    }
    public get hasBeard(): boolean {
        return this._hasBeard;
    }
}
class Girl extends Human {
    private _hasEarPierced: boolean = false;

    public constructor(name: string, age: number, gender: GenderType, height: number, weight: number, pierced: boolean) {
        super(name, age, gender, height, weight);
        this.hasEarPierced = pierced;
    }

    public set hasEarPierced(is: boolean) {
        this._hasEarPierced = is;
    }
    public get hasEarPierced(): boolean {
        return this._hasEarPierced;
    }
}