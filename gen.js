//  GENERATORS //

/*
generators provide a new way to work with functions and iterators.

Using a generator:
1. you can stop the execution of a function from anywhere inside the function
2. continue executing code from a halted position.


SYNTAX OF GENERATOR
----------------------

// define a generator function
function* generator_function() {
   ... .. ...
}

// creating a generator
const generator_obj = generator_function();

*/

//EXAMPLE Using Multiple yield {yield is used for pause of Excecution}
function* generatorFunc() {

    console.log("1. code before first yield");
    yield 100;

   console.log("2. code before the second yield");
    yield 200;

    console.log("3. code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//EXAMPLE Fibonacci generator using next() to restart sequence
function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
      const reset = yield current;
      [current, next] = [next, next + current];
      if (reset) {
        current = 0;
        next = 1;
      }
    }
  }
  
  const sequence = fibonacci();
  console.log(sequence.next().value);     // 0
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  console.log(sequence.next().value);     // 3
  console.log(sequence.next().value);     // 5
  console.log(sequence.next().value);     // 8
  console.log(sequence.next(true).value); // 0
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  