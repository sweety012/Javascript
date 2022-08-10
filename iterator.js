// ITERATORS
/*
 Iterator is an object which defines a sequence and potentially a return value upon its termination.
 an iterator is any object which implements the Iterator protocol by having a next() method 
 that returns an object with two properties:
 1. Value : The next Value in iteration Sequence 
 2. done : This is true if sequence has already been consumed
            if value is present alongside done, it means iterator's return value
*/

//EXAMPLE with User Defined Interator
function displayElements(arr) {

    // to update the iteration
    let n = 0;

    return {

        // implementing the next() function
        next() {

            if(n < arr.length) {
                return {
                    value: arr[n++],
                    done: false
                }
            }

            return {
                value: undefined,
                done: true
            }
        }
    }
}

const arr = ['h', 'e', 'l', 'l', 'o'];

const arrIterator = displayElements(arr);

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());