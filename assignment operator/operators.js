//Arithmetic operators 
let a = 5
let b = 3

console.log("a =", a, "& b =", b);
console.log("addition a+b =", a+b );
console.log("subtraction a-b =", a-b );
console.log("multiplication a*b =", a*b );
console.log("division a/b =", a/b );
console.log("modulus a%b =", a%b );
console.log("Exponentiation a*b =", a*b );
//Post (-- after operand): prints old value first, then decreases.
//Pre (-- before operand): decreases first, then prints new value.
console.log("post-increment a ++ =", a++ );
console.log("post-decrement b -- =", b-- );
console.log("value after a =", a, "& b =", b);
console.log("pre-increment ++ a  =", ++a );
console.log("pre-decrement -- b =", --b );

//Assignment Operators
let c = 10;

console.log("initial value: c =", c);

c += 5;
console.log("addition assignment (c += 5) =", c);

c -= 7;
console.log("subtraction assignment (c -= 7) =", c);

c *= 3;
console.log("multiplication assignment (c *= 3) =", c);

c /= 2;
console.log("division assignment (c /= 2) =", c);

c %= 4;
console.log("modulus assignment (c %= 4) =", c);

c **= 2;
console.log("exponentiation assignment (c **= 2) =", c);

//Comparison Operators

let d = 5;
let e = 10;
let f = 5;

console.log("initial value: d =", d);
console.log("initial value: e =", e);
console.log("initial value: f =", f);

console.log("d is equal to f (d == f) =", d == f);
console.log("d is equal to e (d == e) =", d == e);
console.log("d is equal to 5 (d == 5) =", d == 5);
console.log("d is equal to 10 (d == 10) =", d == 10);

console.log("d is not equal to f (d != f) =", d != f);
console.log("d is not equal to e (d != e) =", d != e);
console.log("d is not equal to 5 (d != 5) =", d != 5);
console.log("d is not equal to 10 (d != 10) =", d != 10);

console.log("d is strictly equal to '5' (d === '5') =", d === '5');
console.log("d is strictly equal to 5 (d === 5) =", d === 5);

console.log("d is strictly not equal to '5' (d !== '5') =", d !== '5');
console.log("d is strictly not equal to 5 (d !== 5) =", d !== 5);

console.log("d is greater than e (d > e) =", d > e);
console.log("e is greater than d (e > d) =", e > d);

console.log("d is less than e (d < e) =", d < e);
console.log("e is less than d (e < d) =", e < d);

console.log("d is greater than or equal to f (d >= f) =", d >= f);
console.log("e is greater than or equal to d (e >= d) =", e >= d);

console.log("d is less than or equal to f (d <= f) =", d <= f);
console.log("e is less than or equal to d (e <= d) =", e <= d);

//logical operators

console.log("d =", d, "e =", e, "f =", f);

console.log("d < e && e > f =", d < e && e > f);
console.log("d > e && e > f =", d > e && e > f);

console.log("d < e || e < f =", d < e || e < f);
console.log("d > e || e < f =", d > e || e < f);

console.log("!(d === f) =", !(d === f));
console.log("!(d !== f) =", !(d !== f));
console.log("!(d > e) =", !(d > e));

// Conditional statement 

let battery = 99;

if(battery <= 10  ) {
  console.log(" emergency mode");
} 
else if (battery <= 20 ) {
  console.log(" low power mode");
} 
else if (battery <= 80 ) {
    console.log("Eco mode")
} 
else  {
    console.log("gorilla mode")
}

let age = prompt("Enter your age to know if you can vote or not:");
age = Number(age);

if (age > 60) {
  console.log(age, "— You are a senior citizen. Nice! Still ready to vote.");
} 
else if (age >= 18) {
  console.log(age, "— You can vote.");
} 
else {
  console.log(age, "— You are too young to vote.");
}







 