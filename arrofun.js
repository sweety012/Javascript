/* Arrow Function 

it is the ALternative of function Expression 

Arrow Function don't have their own bindings to this, arguments or super, and should not be used as methods.
Arrow functions don't have access to the new.target keyword.
Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
Arrow functions cannot be used as constructors.
Arrow functions cannot use yield, within its body.

suppose :
// function expression
let x = function(x, y) {
   return x * y;
}

can be Written as 

// using arrow functions
let x = (x, y) => x * y;

Syntax of Arrow Function

let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}
*/

//EXAMPLE 1: Arrow Function with No Argument

let greet = () => console.log('Hello');
greet(); // Hello

//EXAMPLE 2: Arrow Fucntion with One Argument

let greet = x => console.log(x);
greet('Hello'); // Hello 

//EXAMPLE 3: Arrow Function with an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

//EXAMPLE 4: Arrow Fucntion with Multiline
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12

//EXAMPLE 5: Arrow Function with this
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();

//OUTPUT 
/*
25
25
*/


//EXAMPLE 6: Arrow Function with Promises and Callbacks

// ES5 Version of JS
asyncFunction().then(function() {
    return asyncFunction1();
}).then(function() {
    return asyncFunction2();
}).then(function() {
    finish;
});

// ES6 Version of JS
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish);




