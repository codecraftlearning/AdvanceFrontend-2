




let fullName = 'Ankit Kumar Soni';

console.log(fullName.charAt(0));
console.log(fullName.charCodeAt(0));
console.log(fullName.toLowerCase().endsWith('soni'));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.includes('Kumar'))
console.log(fullName.length)
console.log(fullName.replaceAll(' ', '-'))
console.log(fullName.split(' '));

let names = fullName.split(' ');
console.log(names.join('/'));


let arr = [1,2,3,4,5,6,7];
console.log(arr.join('-'));


let myFriends = [
    'ayant',
    'sonal',
    'bhavishya',
    'rahul'
]

console.log(myFriends.join(', '));

console.log(myFriends.slice(1, 3));
console.log(myFriends);

console.log(myFriends.splice(0, 2));
console.log(myFriends);



