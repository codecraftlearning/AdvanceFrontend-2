
function printTillRange(range: number, multiplier: number = 1): number {
    let sum: number = 0;

    // multiplier = multiplier === undefined ? 1 : multiplier;

    for (let i = 1; i <= range; i++) {
        sum += (i * multiplier);
    }

    return sum;
}

let res: number = printTillRange(10, 2);
console.log(res);

res = printTillRange(10);
console.log(res);


let arr: number[] = [1, 2, 3, 4, 5, 6];

type SData = {
    name: string,
    age?: number | 'not sure' // union types
}

let obj: SData = {
    name: 'asda',
    age: 'not sure'
}

/*
    ternary operator :    <variable> = <condition(s)> ? <return value if true> : <return value is false>;
*/


/*
    1). strong typing :
   *  Every variable has a known type
   *  You cannot mix types accidentally
   *  Operations must match the expected types
   
    2). Optional properties
   * Optional properties mean a property may or may not exist on an object.
   * They are marked using the ? operator.
   * interface User {
                     id: number;
                    name: string;
                    age?: number;   // optional
                                                }
   
    3). Union types
    * Union = OR
    * Intersection = AND (&)  RARELY USED NOT RECOMANEDED
    
    4). types
    * types define what kind of data a variable, function, or object can hold.
      They are the foundation of strong typing.

*/