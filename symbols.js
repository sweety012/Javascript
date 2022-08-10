// JavaScript Symbols
//The JavaScript ES6 introduced a new primitive data type called Symbol.

// creating symbol
const x = Symbol()
typeof x; // symbol

// Access Symbol Description
const x = Symbol('hey');
console.log(x.description); // hey

// Add Symbol as an Object Key
let id = Symbol("id");

let person = {
    name: "Jack",// adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}

//Symbols are not included in for...in Loop

let id = Symbol("id");

let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let key in person) {
    console.log(key);
}


//Example: Symbol Methods
// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id

//Example: Symbol Properties Example

const x = Symbol('hey');

// description property
console.log(x.description); // hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); // ["a", "b", "c", [1, 2, 3]]