

let num1 = 10;
let num2 = 20;
let num3 = 30;

let sum = num1 + num2 + num3;
let sub = num3 - num2 - num1;
let mul = num1 * num2 * num3;
let div = num1 / num2 / num3;
let per = num2 % num1;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(per);


let fName = "Some";
let lName = "Name";
let fullName = fName + " " + lName; //=> concatination
console.log(fullName);



/*
    boolean (true/false)
    and operation (2 booleans)
    or operation (2 booleans)
    not operation (single boolean)

    AND TABLE (&&) 
    true && true = true
    true && false = false
    false && true = false
    false && false = false

    OR Table (||)
    true || true = true
    true || false = true
    false || true = true
    false || flase = false 

    NOT Table (!)
    !(false) = true
    !true = false
*/




let v1 = 20;
let v2 = 30;

let isEqual = v1 === v2;
console.log(isEqual);

let isGreater = v1 > v2;
console.log(isGreater);

let isGreaterOrEqual = v2 >= v1;
console.log(isGreaterOrEqual);

let isLesser = v1 < v2;
console.log(isLesser);

let isLesserOrEqual = v2 <= v1;
console.log(isLesserOrEqual);



let age1 = 30;
let age2 = 20;

let canPass = age1 >= 50 || age2 >= 50 || (age1 + age2) >= 50; //  false || false || true => false || ture => true;
let canPass2 = !(age1 >= 50) || !(age2 >= 50) && !((age1 + age2) >= 50); //  true || true && false => true
console.log(canPass);
console.log(canPass2);


