// 153 = 1^3 + 5^3 + 3^3 ) 1 + 125 + 27 = 153
let sum = 0;
let a = 153;
let b = a;

while (a > 0) {
    let temp = a % 10
    sum += temp * temp * temp
    a /= 10
    a = parseInt(a)
}

if (sum === b) {
    console.log("Armstrong Number");
}

else {
    console.log("not a armstrong no");    
}






