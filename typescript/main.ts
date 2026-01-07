
function printTillRange(range: number, multiplier: number = 1): number {
    let sum: number = 0;

    // multiplier = multiplier === undefined ? 1 : multiplier;

    for(let i = 1; i<=range; i++) {
        sum += (i*multiplier);
    }

    return sum;
}

let res: number = printTillRange(10, 2);
console.log(res);

res = printTillRange(10);
console.log(res);


let arr: number[] = [1,2,3,4,5,6];

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
    1). strong typing
    2). Optional properties
    3). Union types
    4). types
*/