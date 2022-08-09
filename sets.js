// JavaScript Sets //
/* 
How to Create set in JavaScript 
Passing an Array to new Set()
Create a new Set and use add() to add values / Variables
*/

//Example 1: Set Union Operation
// perform union operation
// contain elements of both sets
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = union(setA, setB);

console.log(result);

//Example 2: Set Intersection Operation

// perform intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = intersection(setA, setB);

console.log(result);

//Example 3: Set Difference Operation

// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = difference(setA, setB);

console.log(result);

//Example 4: Set Subset Operation

// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);

const result = subset(setA, setB);

console.log(result);