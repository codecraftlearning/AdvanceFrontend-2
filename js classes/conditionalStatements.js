
//class 1-5 -> junior class
//class 6-8 -> senoir class
//class 9-10 -> metric 
//class 11-12 -> intermediate


function isInBetweenRange(from, to, value) {
    return value >= from && value <= to;
}

function printStandard(standard) {
    if (standard >= 1 && standard <= 5) {
        console.log('Junior Class');
    } else if (standard >= 6 && standard <= 8) {
        console.log('Senior Class');
    } else if (standard >= 9 && standard <= 10) {
        console.log('Metric');
    } else {
        console.log('Intermediate');
    }
}


let standard = 13;

//uncomment below code to use if-else statement
// if (standard >= 1 && standard <= 12) {
//     printStandard(standard);
// } else {
//     console.log('Unknown Standard.');
// }

let className = '';
switch (standard) {
    case 1: 
    case 2: 
    case 3:
    case 4: 
    case 5: className = 'Junior Class';
            break;
    case 6: 
    case 7: 
    case 8: className = 'Senior Class';
            break;
    case 9: 
    case 10: className = 'Metric';
            break;
    case 11: 
    case 12: className = 'Intermediate';
            break;
    default: className = "Unknown Class";
}
console.log(className);

