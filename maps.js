// JAVASCRIPT MAPS //
// Syntax of Creating Maps in JS
// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}


//insert elements as key Map with object key
let map2 = new Map();

let obj = {};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}



//ALL EXMAPLES

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

//insert using set()
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}

// check if an element is in Set
console.log(map1.has('info')); // true

// removing a particular element
map1.delete('address'); // false
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

map1.delete('info'); // true
console.log(map1); // Map {}

// removing all element using clear()
map1.clear(); 
console.log(map1); // Map {}

//to Know Size of Map
console.log(map1.size); // 1

// Get Key / Values of Map
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}