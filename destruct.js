// De-Structuring JavaScript //
/*
____________________Before ES6_________________

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

_______________________After ES6________________________

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

*/

/* NOTE : 

        1. The order of the name does not matter in object destructuring.
        2. When destructuring objects, you should use the same name for the variable as the corresponding object key.

*/

//EXAMPLE Array Destructuring 
const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

//EXAMPLE Assign Default Value
let arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log(x); // 10
console.log(y); // 7


//EXAMPLE SWAPPING VARIABLE
// program to swap variables

let x = 4;
let y = 7;

// swapping variables
[x, y] = [y, x];

console.log(x); // 7
console.log(y); // 4

// EXAMPLE Skip Items

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, , z] = arrValue;

console.log(x); // one
console.log(z); // three

//EXAMPLE Nested Destructuring Assignment
// nested array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three
