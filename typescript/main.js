function printTillRange(range, multiplier) {
    if (multiplier === void 0) { multiplier = 1; }
    var sum = 0;
    // multiplier = multiplier === undefined ? 1 : multiplier;
    for (var i = 1; i <= range; i++) {
        sum += (i * multiplier);
    }
    return sum;
}
var res = printTillRange(10, 2);
console.log(res);
res = printTillRange(10);
console.log(res);
var arr = [1, 2, 3, 4, 5, 6];
var obj = {
    name: 'asda',
    age: 'not sure'
};
/*
    ternary operator :    <variable> = <condition(s)> ? <return value if true> : <return value is false>;
*/
/*
    1). strong typing
    2). Optional properties
    3). Union types
    4). types
*/ 
